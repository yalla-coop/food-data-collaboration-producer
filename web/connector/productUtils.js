import {
  CatalogItem,
  SuppliedProduct,
  QuantitativeValue,
  Price,
  Offer,
  loadConnectorWithResources
} from './index.js';
import { addParamToParams, throwError } from '../utils/index.js';
import loadProductTypes from './mappedProductTypes.js';

const semanticIdPrefix = process.env.PRODUCER_SHOP_URL;

async function createSuppliedProduct(product) {
  try {
    const connector = await loadConnectorWithResources();
    const semanticBase = `${semanticIdPrefix}product/${product.id}`;
    let params = '';

    params = addParamToParams(params, 'handle', product.handle);
    params = addParamToParams(params, 'imageId', product.image?.id);

    const fullSemanticId = semanticBase + params;

    const productTypes = await loadProductTypes();

    const suppliedProduct = connector.createSuppliedProduct({
      connector,
      semanticId: fullSemanticId,
      name: product.title,
      description: product.body_html,
      productType: productTypes[product.product_type] ?? null
    });

    if (
      product.image &&
      product.image.src &&
      product.image.product_id &&
      product.image.product_id === product.id
    ) {
      suppliedProduct.addImage(product.image.src);
    }
    return suppliedProduct;
  } catch (error) {
    throwError('Error creating supplied product:', error);
  }
  return null;
}

const createQuantitativeValue = (connector, value, unit) =>
  connector.createQuantitativeValue({
    connector,
    value,
    unit
  });

const createPrice = (connector, semanticId, value, unit, vatRate) =>
  connector.createPrice({
    connector,
    semanticId: `${semanticId}/price`,
    value,
    unit,
    vatRate
  });

const createOffer = (connector, semanticId, price) =>
  connector.createOffer({
    connector,
    semanticId: `${semanticId}/offer`,
    price
  });

const createCatalogItem = (
  connector,
  semanticId,
  offers,
  sku,
  stockLimitation
) =>
  connector.createCatalogItem({
    connector,
    semanticId: `${semanticId}/catalogItem`,
    offers,
    sku,
    stockLimitation
  });

// creates a variant supplied product with quantity and price
async function createVariantSuppliedProduct(variant, images) {
  try {
    const connector = await loadConnectorWithResources();
    const kilogram = connector.MEASURES.UNIT.QUANTITYUNIT.KILOGRAM;
    const euro = connector.MEASURES.UNIT.CURRENCYUNIT.EURO;
    const semanticBase = `${semanticIdPrefix}product/${variant.product_id}/variant/${variant.id}/inventory/${variant.inventory_item_id}`;
    let params = '';

    params = addParamToParams(params, 'tracked', variant?.tracked);
    params = addParamToParams(params, 'imageId', variant?.image_id);

    const fullSemanticId = semanticBase + params;

    const quantity = createQuantitativeValue(
      connector,
      variant.weight,
      kilogram
    );
    const hasVat = variant.taxable ? 1.0 : 0.0; // TODO check how the vat rate can be added
    const price = createPrice(
      connector,
      semanticBase,
      variant.price,
      euro,
      hasVat
    );
    const offer = createOffer(connector, semanticBase, price);
    const inventoryQuantity = variant.inventory_policy === 'continue' ? -1 : variant.inventory_quantity;
    const catalogItem = createCatalogItem(
      connector,
      semanticBase,
      [offer],
      variant.sku,
      inventoryQuantity
    );

    const suppliedProduct = connector.createSuppliedProduct({
      connector,
      semanticId: fullSemanticId,
      name: variant.title,
      quantity,
      catalogItems: [catalogItem]
    });

    if (Array.isArray(images) && images.length > 0 && variant.image_id) {
      const variantImage = images.find((img) => img.id === variant.image_id);

      if (variantImage && variantImage.src) {
        suppliedProduct.addImage(variantImage.src);
      }
    }

    return [offer, catalogItem, suppliedProduct];
  } catch (error) {
    throwError('Error creating variant supplied product:', error);
  }
  return null;
}

async function createSuppliedProducts(productsFromShopify) {
  try {
    if (
      !Array.isArray(productsFromShopify) ||
      productsFromShopify.length === 0
    ) {
      throwError('Error creating supplied products: no products found');
    }

    const productsPromises = productsFromShopify.flatMap((product) => {
      const suppliedProduct = createSuppliedProduct(product);
      const variants = product.fdcVariants ? Promise.all(product.fdcVariants.flatMap(createVariants(product))) : []
      return [suppliedProduct, ...variants];
    });

    return await Promise.all(productsPromises);
  } catch (error) {
    throwError('Error creating supplied products:', error);
  }
}

const createVariants = (product) => async ({ wholesaleVariantId, retailVariantId, noOfItemsPerPackage }) => {
  const retailVariant = product.variants.find(({ id }) => id === retailVariantId);
  const wholesaleVariant = product.variants.find(({ id }) => id === wholesaleVariantId);

  if (!retailVariant || !wholesaleVariant) {
    console.error(`Variant mapping for Product ${product.id} between ${retailVariantId} and ${wholesaleVariantId} is invalid. Contains non existant variant. Skipping`)
    return [];
  }

  const retailSuppliedProduct = await createVariantSuppliedProduct(retailVariant, product.images)
  const wholesaleSuppliedProduct = await createVariantSuppliedProduct(wholesaleVariant, product.images)

  const connector = await loadConnectorWithResources();

  const plannedConsumptionFlow = connector.createPlannedConsumptionFlow({
    semanticId: "http://myplatform.com/plannedConsumptionFlow",
    quantity: connector.createQuantity({
      value: noOfItemsPerPackage,
      unit: connector.MEASURES.UNIT.QUANTITYUNIT.PIECE
    }),
    product: retailSuppliedProduct
  });

  const plannedProductionFlow = connector.createPlannedProductionFlow({
    semanticId: "http://myplatform.com/plannedProductionFlow",
    quantity: connector.createQuantity({
      value: 1.0,
      unit: connector.MEASURES.UNIT.QUANTITYUNIT.PIECE
    }),
    product: wholesaleSuppliedProduct
  });

  const plannedTransformation = connector.createPlannedTransformation({
    semanticId: "http://myplatform.com/transformation",
    transformationType: connector.VOCABULARY.TRANSFORMATIONTYPE.COMBINES,
    consumptionFlows: [plannedConsumptionFlow],
    productionFlows: [plannedProductionFlow]
  });
  return [plannedTransformation]
};

async function exportSuppliedProducts(productsFromShopify) {
  try {
    if (
      !Array.isArray(productsFromShopify) ||
      productsFromShopify.length === 0
    ) {
      return [];
    }

    const connector = await loadConnectorWithResources();

    const suppliedDFCProducts = await createSuppliedProducts(
      productsFromShopify
    );

    if (suppliedDFCProducts.length === 0) {
      return [];
    }

    const exports = await connector.export(suppliedDFCProducts);
    return exports;
  } catch (error) {
    throwError('Error exporting supplied products:', error);
  }
  return null;
}

export {
  createSuppliedProduct,
  createVariantSuppliedProduct,
  createSuppliedProducts,
  exportSuppliedProducts
};

import { addParamToParams, throwError } from '../utils/index.js';
import loadConnectorWithResources from './index.js';
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
  connector.createQuantity({
    value,
    unit
  });

const createPrice = (connector, value, unit, vatRate) =>
  connector.createPrice({
    value,
    unit,
    vatRate
  });

const createOffer = (connector, semanticId, price) =>
  connector.createOffer({
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
async function createVariantSuppliedProduct(parentProduct, variant, images) {
  try {
    const connector = await loadConnectorWithResources();
    const kilogram = connector.MEASURES.UNIT.QUANTITYUNIT.KILOGRAM;
    const euro = connector.MEASURES.UNIT.CURRENCYUNIT.EURO;

    //todo: This needs to be simplified, but do we have the IDs we need if it does? What does the product ID become, the variant id?
    const semanticBase = `${semanticIdPrefix}product/${variant.product_id}/variant/${variant.id}/inventory/${variant.inventory_item_id}`;
    let params = '';

    params = addParamToParams(params, 'tracked', variant?.tracked);
    params = addParamToParams(params, 'handle', parentProduct.handle)
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

    const productTypes = await loadProductTypes();

    const suppliedProduct = connector.createSuppliedProduct({
      connector,
      semanticId: fullSemanticId,
      name: parentProduct.title + ' - ' + variant.title,
      description: parentProduct.body_html,
      quantity,
      catalogItems: [catalogItem],
      productType: productTypes[parentProduct.product_type] ?? null
    });

    if (
      parentProduct.image &&
      parentProduct.image.src &&
      parentProduct.image.product_id &&
      parentProduct.image.product_id === parentProduct.id
    ) {
      suppliedProduct.addImage(parentProduct.image.src);
    }

    if (Array.isArray(images) && images.length > 0 && variant.image_id) {
      const variantImage = images.find((img) => img.id === variant.image_id);

      if (variantImage && variantImage.src) {
        suppliedProduct.addImage(variantImage.src);
      }
    }

    return suppliedProduct;
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

    const productsPromises = productsFromShopify.map( async (product) => {
      return product.fdcVariants[0] ? await createVariants(product) : []
    });

    return (await Promise.all(productsPromises)).flat();
  } catch (error) {
    throwError('Error creating supplied products:', error);
  }
}

const createVariants = async (shopifyProduct, variantMapping) => {

  const { wholesaleVariantId, retailVariantId, noOfItemsPerPackage } = variantMapping;

  const retailVariant = shopifyProduct.variants.find(({ id }) => id == retailVariantId);
  const wholesaleVariant = shopifyProduct.variants.find(({ id }) => id == wholesaleVariantId);

  if (!retailVariant || !wholesaleVariant) {
    console.error(`Variant mapping for Product ${shopifyProduct.id} between ${retailVariantId} and ${wholesaleVariantId} is invalid. Contains non existant variant. Skipping`);
    return [];
  }

  const retailSuppliedProduct = await createVariantSuppliedProduct(shopifyProduct, retailVariant, shopifyProduct.images)
  const wholesaleSuppliedProduct = await createVariantSuppliedProduct(shopifyProduct, wholesaleVariant, shopifyProduct.images)

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

  return [retailSuppliedProduct, wholesaleSuppliedProduct, plannedConsumptionFlow, plannedProductionFlow, plannedTransformation];
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
    console.error(error);
    throwError('Error exporting supplied products:', error);
  }
  return null;
}

export {
  createSuppliedProduct, createSuppliedProducts, createVariantSuppliedProduct, exportSuppliedProducts
};


import { throwError } from '../utils/index.js';
import loadConnectorWithResources from './index.js';
import loadProductTypes from './mappedProductTypes.js';

export const semanticIdPrefix = `${process.env.PRODUCER_SHOP_URL}api/dfc/Enterprises/${process.env.PRODUCER_SHOP_NAME}/`;

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
    semanticId: `${semanticId}/Offer`,
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
    semanticId: `${semanticId}/CatalogItem`,
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

    const semanticBase = `${semanticIdPrefix}SuppliedProducts/${variant.id}`;

    const quantity = createQuantitativeValue(
      connector,
      variant.weight,
      kilogram
    );
    const hasVat = variant.taxable ? 1.0 : 0.0; // TODO check how the vat rate can be added
    const price = createPrice(connector, variant.price, euro, hasVat);
    const offer = createOffer(connector, semanticBase, price);
    const inventoryQuantity =
      variant.inventory_policy === 'continue' ? -1 : variant.inventory_quantity;
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
      semanticId: semanticBase,
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

    return [suppliedProduct, offer, catalogItem];
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

    const productsPromises = productsFromShopify.map(async (product) =>
      product.fdcVariants?.[0]
        ? await createVariants(product, product.fdcVariants[0])
        : []
    );

    return (await Promise.all(productsPromises)).flat();
  } catch (error) {
    throwError('Error creating supplied products:', error);
  }
}

const createVariants = async (shopifyProduct, variantMapping) => {
  const { wholesaleVariantId, retailVariantId, noOfItemsPerPackage } =
    variantMapping;

  const retailVariant = shopifyProduct.variants.find(
    ({ id }) => id == retailVariantId
  );
  const wholesaleVariant = shopifyProduct.variants.find(
    ({ id }) => id == wholesaleVariantId
  );

  if (!retailVariant || !wholesaleVariant) {
    console.error(
      `Variant mapping for Product ${shopifyProduct.id} between ${retailVariantId} and ${wholesaleVariantId} is invalid. Contains non existant variant. Skipping`
    );
    return [];
  }

  const [retailSuppliedProduct, ...retailOthers] =
    await createVariantSuppliedProduct(
      shopifyProduct,
      retailVariant,
      shopifyProduct.images
    );
  const [wholesaleSuppliedProduct, ...wholesaleOthers] =
    await createVariantSuppliedProduct(
      shopifyProduct,
      wholesaleVariant,
      shopifyProduct.images
    );

  const connector = await loadConnectorWithResources();

  const semanticBase = `${semanticIdPrefix}SuppliedProducts/${retailVariant.id}`;

  const plannedConsumptionFlow = connector.createPlannedConsumptionFlow({
    semanticId: `${semanticBase}/AsPlannedConsumptionFlow`,
    quantity: connector.createQuantity({
      value: noOfItemsPerPackage,
      unit: connector.MEASURES.UNIT.QUANTITYUNIT.PIECE
    }),
    product: retailSuppliedProduct
  });

  const plannedProductionFlow = connector.createPlannedProductionFlow({
    semanticId: `${semanticBase}/AsPlannedProductionFlow`,
    quantity: connector.createQuantity({
      value: 1.0,
      unit: connector.MEASURES.UNIT.QUANTITYUNIT.PIECE
    }),
    product: wholesaleSuppliedProduct
  });

  const plannedTransformation = connector.createPlannedTransformation({
    semanticId: `${semanticBase}/AsPlannedTransformation`,
    transformationType: connector.VOCABULARY.TRANSFORMATIONTYPE.COMBINES,
    consumptionFlows: [plannedConsumptionFlow],
    productionFlows: [plannedProductionFlow]
  });

  return [
    retailSuppliedProduct,
    wholesaleSuppliedProduct,
    plannedConsumptionFlow,
    plannedProductionFlow,
    plannedTransformation,
    ...retailOthers,
    ...wholesaleOthers
  ];
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
  createSuppliedProducts,
  createVariantSuppliedProduct,
  exportSuppliedProducts
};

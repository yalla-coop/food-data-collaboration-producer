import { throwError } from '../utils/index.js';
import loadConnectorWithResources from './index.js';
import loadProductTypes from './mappedProductTypes.js';
import config from '../config.js';
import currencyMeasureFor from '../utils/currencyMeasureFor.js';

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

async function createVariantSuppliedProduct(
  parentProduct,
  variant,
  enterpriseName
) {
  try {
    const connector = await loadConnectorWithResources();
    const kilogram = connector.MEASURES.UNIT.QUANTITYUNIT.KILOGRAM;

    const semanticBase = `${config.PRODUCER_SHOP_URL}api/dfc/Enterprises/${enterpriseName}/SuppliedProducts/${variant.id}`;

    const quantity = createQuantitativeValue(
      connector,
      variant?.inventoryItem?.measurement?.weight?.value || 0,
      kilogram
    );
    const hasVat = variant.taxable ? 1.0 : 0.0; // TODO check how the vat rate can be added
    const price = createPrice(
      connector,
      variant.price,
      currencyMeasureFor(connector, variant.currencyCode),
      hasVat
    );
    const offer = createOffer(connector, semanticBase, price);
    const inventoryQuantity =
      variant.inventoryPolicy === 'CONTINUE' ? -1 : variant.inventoryQuantity;
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
      description: parentProduct.descriptionHtml,
      quantity,
      catalogItems: [catalogItem],
      productType: productTypes[parentProduct.productType] ?? null
    });

    const image = variant.image?.src || parentProduct.images[0]?.src;

    if (image) {
      suppliedProduct.addImage(image);
    }

    return [suppliedProduct, offer, catalogItem];
  } catch (error) {
    throwError('Error creating variant supplied product:', error);
  }
  return null;
}

async function createSuppliedProducts(productsFromShopify, enterpriseName) {
  try {
    if (
      !Array.isArray(productsFromShopify) ||
      productsFromShopify.length === 0
    ) {
      throwError('Error creating supplied products: no products found');
    }

    const productsPromises = productsFromShopify.flatMap((product) =>
      product.fdcVariants
        .filter(({ enabled }) => enabled)
        .map((variant) => createVariants(product, variant, enterpriseName))
    );

    return (await Promise.all(productsPromises)).flat();
  } catch (error) {
    throwError('Error creating supplied products:', error);
  }
}

const createVariants = async (
  shopifyProduct,
  variantMapping,
  enterpriseName
) => {
  const { wholesaleVariantId, retailVariantId, noOfItemsPerPackage } =
    variantMapping;

  const retailVariant = shopifyProduct.variants.find(
    ({ id }) => id == retailVariantId
  );

  if (!retailVariant) {
    console.error(
      `Variant mapping for Product ${shopifyProduct.id} for retail variant ${retailVariantId} is invalid. Contains non existant variant. Skipping`
    );
    return [];
  }

  if (wholesaleVariantId) {
    const wholesaleVariant = shopifyProduct.variants.find(
      ({ id }) => id == wholesaleVariantId
    );
    return await createMappedVariant(
      shopifyProduct,
      retailVariant,
      wholesaleVariant,
      noOfItemsPerPackage,
      enterpriseName
    );
  } else {
    return await createVariantSuppliedProduct(
      shopifyProduct,
      retailVariant,
      enterpriseName
    );
  }
};

async function createMappedVariant(
  shopifyProduct,
  retailVariant,
  wholesaleVariant,
  noOfItemsPerPackage,
  enterpriseName
) {
  const [retailSuppliedProduct, ...retailOthers] =
    await createVariantSuppliedProduct(
      shopifyProduct,
      retailVariant,
      enterpriseName
    );
  const [wholesaleSuppliedProduct, ...wholesaleOthers] =
    await createVariantSuppliedProduct(
      shopifyProduct,
      wholesaleVariant,
      enterpriseName
    );

  const connector = await loadConnectorWithResources();

  const semanticBase = `${config.PRODUCER_SHOP_URL}api/dfc/Enterprises/${enterpriseName}/SuppliedProducts/${retailVariant.id}`;

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
}

async function exportSuppliedProducts(productsFromShopify, enterpriseName) {
  try {
    if (
      !Array.isArray(productsFromShopify) ||
      productsFromShopify.length === 0
    ) {
      return [];
    }

    const connector = await loadConnectorWithResources();

    const suppliedDFCProducts = await createSuppliedProducts(
      productsFromShopify,
      enterpriseName
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

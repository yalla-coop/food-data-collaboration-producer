import {
  connector,
  CatalogItem,
  SuppliedProduct,
  QuantitativeValue,
  Price,
  Offer
} from './index.js';
import { addParamToParams, throwError } from '../utils/index.js';
import productTypes from './mappedProductTypes.js';

const kilogram = connector?.MEASURES?.UNIT?.QUANTITYUNIT?.KILOGRAM;
const euro = connector?.MEASURES?.UNIT?.CURRENCYUNIT?.EURO;
const semanticIdPrefix = process.env.PRODUCER_SHOP_URL;

function createSuppliedProduct(product) {
  const semanticBase = `${semanticIdPrefix}product/${product.id}`;
  let params = '';

  params = addParamToParams(params, 'handle', product.handle);
  params = addParamToParams(params, 'imageId', product.image?.id);

  const fullSemanticId = semanticBase + params;

  const suppliedProduct = new SuppliedProduct({
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
}

const createQuantitativeValue = (value, unit) =>
  new QuantitativeValue({
    connector,
    value,
    unit
  });

const createPrice = (semanticId, value, unit, vatRate) =>
  new Price({
    connector,
    semanticId: `${semanticId}/price`,
    value,
    unit,
    vatRate
  });

const createOffer = (semanticId, price) =>
  new Offer({
    connector,
    semanticId: `${semanticId}/offer`,
    price
  });

const createCatalogItem = (semanticId, offers, sku, stockLimitation) =>
  new CatalogItem({
    connector,
    semanticId: `${semanticId}/catalogItem`,
    offers,
    sku,
    stockLimitation
  });

// creates a variant supplied product with quantity and price
function createVariantSuppliedProduct(variant, images) {
  const semanticBase = `${semanticIdPrefix}product/${variant.product_id}/variant/${variant.id}/inventory/${variant.inventory_item_id}`;
  let params = '';

  params = addParamToParams(params, 'tracked', variant.tracked);
  params = addParamToParams(params, 'imageId', variant.image_id);

  const fullSemanticId = semanticBase + params;

  const quantity = createQuantitativeValue(variant.weight, kilogram);
  const hasVat = variant.taxable ? 1.0 : 0.0; // TODO check how the vat rate can be added
  const price = createPrice(semanticBase, variant.price, euro, hasVat);
  const offer = createOffer(semanticBase, price);
  const catalogItem = createCatalogItem(
    semanticBase,
    [offer],
    variant.sku,
    variant.inventory_quantity
  );

  const suppliedProduct = new SuppliedProduct({
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
}

function createSuppliedProducts(fdcProductsFromShopify) {
  if (
    !Array.isArray(fdcProductsFromShopify) ||
    fdcProductsFromShopify.length === 0
  ) {
    throwError('Error creating supplied products: no products found');
  }

  return fdcProductsFromShopify.flatMap((product) => {
    // add parent product
    const productsToExport = [createSuppliedProduct(product)];

    // process variants
    if (Array.isArray(product.variants) && product.variants.length > 0) {
      const variantProducts = product.variants.flatMap((variant) =>
        createVariantSuppliedProduct(variant, product.images)
      );

      productsToExport.push(...variantProducts); // offer, catalogItem, suppliedProduct
    }

    return productsToExport;
  });
}

async function exportSuppliedProducts(fdcProductsFromShopify) {
  try {
    if (
      !Array.isArray(fdcProductsFromShopify) ||
      fdcProductsFromShopify.length === 0
    ) {
      return [];
    }

    const suppliedDFCProducts = createSuppliedProducts(fdcProductsFromShopify);

    if (suppliedDFCProducts.length === 0) {
      return [];
    }

    return await connector.export(suppliedDFCProducts, {
      outputContext: { '@context': 'https://www.datafoodconsortium.org' }
    });
  } catch (error) {
    throwError('Error exporting supplied products:', error);
  }
  return null;
}

export default exportSuppliedProducts;

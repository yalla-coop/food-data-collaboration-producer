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
  } catch (error) {
    throwError('Error creating supplied product:', error);
  }
  return null;
}

const createQuantitativeValue = (connector, value, unit) =>
  new QuantitativeValue({
    connector,
    value,
    unit
  });

const createPrice = (connector, semanticId, value, unit, vatRate) =>
  new Price({
    connector,
    semanticId: `${semanticId}/price`,
    value,
    unit,
    vatRate
  });

const createOffer = (connector, semanticId, price) =>
  new Offer({
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
  new CatalogItem({
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

    params = addParamToParams(params, 'tracked', variant.tracked);
    params = addParamToParams(params, 'imageId', variant.image_id);

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
    const catalogItem = createCatalogItem(
      connector,
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
  } catch (error) {
    throwError('Error creating variant supplied product:', error);
  }
  return null;
}

async function createSuppliedProducts(fdcProductsFromShopify) {
  try {
    if (
      !Array.isArray(fdcProductsFromShopify) ||
      fdcProductsFromShopify.length === 0
    ) {
      throwError('Error creating supplied products: no products found');
    }

    const productsPromises = fdcProductsFromShopify.map(async (product) => {
      const suppliedProduct = await createSuppliedProduct(product);
      const productsToExport = [suppliedProduct]; // Start with the parent product

      // If there are variants, process them
      if (Array.isArray(product.variants) && product.variants.length > 0) {
        const variantPromises = product.variants.map((variant) =>
          createVariantSuppliedProduct(variant, product.images)
        );

        const variantProducts = await Promise.all(variantPromises);
        const flattenedVariantProducts = variantProducts.flat();
        productsToExport.push(...flattenedVariantProducts);
      }

      return productsToExport;
    });

    const suppliedProducts = await Promise.all(productsPromises);
    return suppliedProducts.flat();
  } catch (error) {
    throwError('Error creating supplied products:', error);
  }
  return null;
}

async function exportSuppliedProducts(fdcProductsFromShopify) {
  try {
    if (
      !Array.isArray(fdcProductsFromShopify) ||
      fdcProductsFromShopify.length === 0
    ) {
      return [];
    }

    const connector = await loadConnectorWithResources();

    const suppliedDFCProducts = await createSuppliedProducts(
      fdcProductsFromShopify
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

import {
  Connector,
  CatalogItem,
  SuppliedProduct,
  QuantitativeValue,
  Price,
  Offer
} from '@datafoodconsortium/connector';
import facets from './thesaurus/facets.json' assert { type: 'json' };
import measures from './thesaurus/measures.json' assert { type: 'json' };
import productTypes from './thesaurus/productTypes.json' assert { type: 'json' };

const connector = new Connector();

await Promise.all([
  connector.loadFacets(JSON.stringify(facets)),
  connector.loadMeasures(JSON.stringify(measures)),
  connector.loadProductTypes(JSON.stringify(productTypes))
]);

const kilogram = connector.MEASURES.UNIT.QUANTITYUNIT.KILOGRAM;
const euro = connector.MEASURES.UNIT.CURRENCYUNIT.EURO;

const dummyStorePrefix = 'https://fdc-producer-yalla-dev';

function createSuppliedProduct(product) {
  const semanticBase = `${dummyStorePrefix}/products/${product.id}`; // TODO: add shop url to env
  const suppliedProduct = new SuppliedProduct({
    connector,
    semanticId: semanticBase,
    name: product.title
    // description: '',
    // productType: connector.PRODUCT_TYPES.VEGETABLE.TOMATO.ROUND_TOMATO
  });

  return suppliedProduct;
}

const createQuantitativeValue = (value, unit) =>
  new QuantitativeValue({
    connector,
    value,
    unit
  });

const createPrice = (semanticId, value, unit) =>
  new Price({
    connector,
    semanticId: `${semanticId}/price`,
    value,
    unit
  });

const createOffer = (semanticId, price) =>
  new Offer({
    connector,
    semanticId: `${semanticId}/offer`,
    price
  });

const createCatalogItem = (semanticId, offers) =>
  new CatalogItem({
    connector,
    semanticId: `${semanticId}/catalogItem`,
    offers
  });

// creates a variant supplied product with quantity and price
function createVariantSuppliedProduct(variant) {
  const semanticBase = `${dummyStorePrefix}/products/${variant.product_id}/variant/${variant.id}`; // TODO: add shop url to env

  const quantity = createQuantitativeValue(variant.weight, kilogram);
  const price = createPrice(semanticBase, variant.price, euro);
  const offer = createOffer(semanticBase, price);
  const catalogItem = createCatalogItem(semanticBase, [offer]);

  const suppliedProduct = new SuppliedProduct({
    connector,
    semanticId: semanticBase,
    name: variant.title,
    quantity,
    catalogItems: [catalogItem]
  });

  return [offer, catalogItem, suppliedProduct];
}

function createSuppliedProducts(fdcProductsFromShopify) {
  if (
    !Array.isArray(fdcProductsFromShopify) ||
    fdcProductsFromShopify.length === 0
  ) {
    return [];
  }

  return fdcProductsFromShopify.flatMap((product) => {
    // add parent product
    const productsToExport = [createSuppliedProduct(product)];

    // process variants
    if (Array.isArray(product.variants) && product.variants.length > 0) {
      const variantProducts = product.variants.flatMap((variant) => {
        return createVariantSuppliedProduct(variant);
      });
      productsToExport.push(...variantProducts); // offer, catalogItem, suppliedProduct
    }

    return productsToExport;
  });
}

async function exportSuppliedProducts(fdcProductsFromShopify) {
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
}

export { exportSuppliedProducts, connector };

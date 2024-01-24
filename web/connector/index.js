import { Connector, SuppliedProduct } from '@datafoodconsortium/connector';
import facets from './thesaurus/facets.json' assert { type: 'json' };
import measures from './thesaurus/measures.json' assert { type: 'json' };
import productTypes from './thesaurus/productTypes.json' assert { type: 'json' };
import context from './context.json' assert { type: 'json' };

const connector = new Connector();

await Promise.all([
  connector.loadFacets(JSON.stringify(facets)),
  connector.loadMeasures(JSON.stringify(measures)),
  connector.loadProductTypes(JSON.stringify(productTypes))
]);

function createSuppliedProduct(product) {
  const suppliedProduct = new SuppliedProduct({
    connector,
    semanticId: `https://admin.shopify.com/store/fdc-hub-yalla-dev/products/${product.id}`, // TODO: add shop url to env
    name: product.title,
    description: product.body_html, // TODO: map description without html
    productType: connector.PRODUCT_TYPES.VEGETABLE.TOMATO.ROUND_TOMATO // TODO: map product type
  });

  return suppliedProduct;
}

function createSuppliedProducts(fdcProductsFromShopify) {
  if (!fdcProductsFromShopify) {
    return [];
  }
  return fdcProductsFromShopify.map((p) => createSuppliedProduct(p));
}

async function exportSuppliedProducts(fdcProductsFromShopify) {
  const suppliedDFCProducts = createSuppliedProducts(fdcProductsFromShopify);

  if (!suppliedDFCProducts.length) {
    return [];
  }

  return await connector.export(suppliedDFCProducts, {
    outputContext: context
  });
}

export { exportSuppliedProducts, connector, context };

import { Connector } from '@datafoodconsortium/connector';
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

function mapDFCProduct(product) {
  const dfcMappedProduct = {
    // semanticId: `${process.env.SHOPIFY_STORE_PRODUCTS_URL}/${product.id}`,
    semanticId: `https://admin.shopify.com/store/fdc-hub-yalla-dev/products/${product.id}`,
    description: product.title,
    Name: product.title,
    Id: JSON.stringify(product.id)
  };

  return dfcMappedProduct;
}

function createSuppliedProducts(fdcProductsFromShopify) {
  if (!fdcProductsFromShopify) {
    return [];
  }
  return fdcProductsFromShopify.map((p) =>
    connector.createSuppliedProduct(mapDFCProduct(p))
  );
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

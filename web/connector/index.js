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

const loadResources = async () => {
  await Promise.all([
    connector.loadFacets(JSON.stringify(facets)),
    connector.loadMeasures(JSON.stringify(measures)),
    connector.loadProductTypes(JSON.stringify(productTypes))
  ]);
};

if (process.env.NODE_ENV !== 'test') {
  loadResources().catch((error) => {
    console.error('Error loading resources', error);
  });
}

export {
  connector,
  CatalogItem,
  SuppliedProduct,
  QuantitativeValue,
  Price,
  Offer
};

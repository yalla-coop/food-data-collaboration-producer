import {
  Connector,
} from '@datafoodconsortium/connector';
import facets from './thesaurus/facets.json' assert { type: 'json' };
import measures from './thesaurus/measures.json' assert { type: 'json' };
import productTypes from './thesaurus/productTypes.json' assert { type: 'json' };
import { throwError } from '../utils/index.js';

let _connector;
let connected = false;

export default loadConnectorWithResources = async () => {
  try {
    if (!connected) {
      const connector = new Connector();
      const resourcePromisesArray = [
        connector.loadFacets(JSON.stringify(facets)),
        connector.loadMeasures(JSON.stringify(measures)),
        connector.loadProductTypes(JSON.stringify(productTypes))
      ];
      await Promise.all(resourcePromisesArray);

      connected = true;
      _connector = connector;
      return _connector;
    }

    return _connector;
  } catch (error) {
    throwError('Error loading connector', error);
  }
};

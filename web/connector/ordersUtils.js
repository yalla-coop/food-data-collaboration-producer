import { OrderLine, Person } from '@datafoodconsortium/connector';
import {
  getTargetStringFromSemanticId,
  throwError
} from '../utils/index.js';

import loadConnectorWithResources from './index.js';

async function getOrderLine(order) {
  try {
    const semanticId = order.getSemanticId();

    return {
      variant_id: getTargetStringFromSemanticId(semanticId, 'lineItem'),
      quantity: order.getQuantity()
    };
  } catch (error) {
    throwError('Error fetching single orderLine', error);
  }

  return null;
}

async function getCustomer(connector, dfcCustomer) {
  let importedCustomers = await connector.import(dfcCustomer);
  if (!Array.isArray(importedCustomers) || !importedCustomers.length) {
    throwError('Error importing Order: no imports');
  }

  importedCustomers = importedCustomers.filter(
    (importedCustomer) => importedCustomer instanceof Person
  );

  return {
    first_name: importedCustomers[0].getFirstName(),
    last_name: importedCustomers[0].getLastName(),
    email: importedCustomers[0].getLastName()
  };
}
async function getOrder(connector, dfcOrder) {
  let importedOrders = await connector.import(dfcOrder);
  if (!Array.isArray(importedOrders) || !importedOrders.length) {
    throwError('Error importing Order: no imports');
  }

  importedOrders = importedOrders.filter(
    (importedProduct) => importedProduct instanceof OrderLine
  );

  return Promise.all(
    importedOrders.map((order) => {
      try {
        return getOrderLine(order);
      } catch (error) {
        throwError(
          'Error getting supplied product details from imports',
          error
        );
      }
      return null;
    })
  );
}

async function importDFCConnectorOrder(dfcOrder) {
  try {
    const connector = await loadConnectorWithResources();
    let jsonString = dfcOrder;
    if (typeof dfcOrder === 'object') {
      jsonString = JSON.stringify(dfcOrder);
    }
    return await getOrder(connector, jsonString);
  } catch (error) {
    throwError('Error generating Shopify FDC orders', error);
  }

  return null;
}

export async function importDFCConnectorCustomer(dfcCustomer) {
  try {
    const connector = await loadConnectorWithResources();
    let jsonString = dfcCustomer;
    if (typeof dfcCustomer === 'object') {
      jsonString = JSON.stringify(dfcCustomer);
    }
    return await getCustomer(connector, jsonString);
  } catch (error) {
    throwError('Error generating Shopify FDC Customer', error);
  }

  return null;
}

export default importDFCConnectorOrder;

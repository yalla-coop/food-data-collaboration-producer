import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { extractOrderLine, createDfcOrderLineFromShopify } from '../dfc/dfc-order.js';
import {persistLineIdMappings} from './lineItemMappings.js'
import * as orders from './shopify/orders.js';

// transaction
const createOrUpdateOrderLine = async (req, res) => { 
    const session = await getSession(shopName)
    const client = new shopify.api.clients.Graphql({ session });

    const orderLine = extractOrderLine(req.body)

    const shopifyOrder = await orders.findOrder(client, req.params['id']);

    if (!shopifyOrder) {
        return res.status(404).send('Unable to find order');
    }

    const updatedLines = await orders.createUpdatedShopifyLines(shopifyOrder, orderLine);
    const updatedShopifyDraftOrder = await orders.updateOrder(client, req.params['id'], updatedLines);
    const lineItemIdMappings = await persistLineIdMappings(updatedShopifyDraftOrder)
    const dfcOrder = await createDfcOrderLineFromShopify(updatedShopifyDraftOrder, req.params['lineId'], lineItemIdMappings);
    res.type('application/json')
    res.send(dfcOrder);
}

export default createOrUpdateOrderLine
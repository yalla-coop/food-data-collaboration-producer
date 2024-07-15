import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { extractOrderAndLines, createDfcOrderFromShopify } from '../dfc/dfc-order.js';
import { findCustomer } from './shopify/customer.js';
import * as orders from './shopify/orders.js';
import {persistLineIdMappings} from './lineItemMappings.js'

const createOrder = async (req, res) => { 
    const session = await getSession(shopName)
    const client = new shopify.api.clients.Graphql({ session });

    const customerId = await findCustomer(client, req.userId);
    const order = extractOrderAndLines(req.body)
    const shopifyLines = (await order.getLines()).map(orders.dfcLineToShopifyLine)
    const shopifyDraftOrder = await orders.createShopifyOrder(client, customerId, customerEmail, shopifyLines);
    
    const lineItemIdMappings = await persistLineIdMappings(shopifyDraftOrder)
    const dfcOrder = await createDfcOrderFromShopify(shopifyDraftOrder, lineItemIdMappings);
    res.type('application/json')
    res.send(dfcOrder);
}

export default createOrder;
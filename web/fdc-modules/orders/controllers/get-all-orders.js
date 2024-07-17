import { getAllLineItems } from '../../../database/line_items/lineItems.js';
import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { createBulkDfcOrderFromShopify } from '../dfc/dfc-order.js';
import { findOrders } from './shopify/orders.js';

const getAllOrders = async (req, res) => { 
    const session = await getSession(`${req.params.EnterpriseName}.myshopify.com`)
    const client = new shopify.api.clients.Graphql({ session });

    const draftOrdersWithLineItemMappings = await getAllLineItems();

    const shopifyOrders = await findOrders(client);

    const allDfcOrders = await createBulkDfcOrderFromShopify(shopifyOrders, draftOrdersWithLineItemMappings, req.params.EnterpriseName);

    res.type('application/json')
    res.send(allDfcOrders);
}

export default getAllOrders
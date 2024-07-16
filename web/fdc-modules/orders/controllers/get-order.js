import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { createDfcOrderFromShopify } from '../dfc/dfc-order.js';
import { findOrder } from './shopify/orders.js';
import { getLineItemIdMappings } from '../../../database/line_items/lineItems.js'

const getOrder = async (req, res) => { 
    const session = await getSession(`${req.params.EnterpriseName}.myshopify.com`)
    const client = new shopify.api.clients.Graphql({ session });

    const shopifyOrder = await findOrder(client, req.params.id);

    if (!shopifyOrder) {
        return res.status(404).send('Unable to find order');
    }

    const dfcOrder = await createDfcOrderFromShopify(shopifyOrder, await getLineItemIdMappings(shopifyOrder.id), req.params.EnterpriseName);
    res.type('application/json')
    res.send(dfcOrder);
}

export default getOrder
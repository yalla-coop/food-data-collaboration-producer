import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { createDfcOrderLinesFromShopify } from '../dfc/dfc-order.js';
import { findOrder } from './shopify/orders.js';

const getOrderLines = async (req, res) => { 
    const session = await getSession(shopName)
    const client = new shopify.api.clients.Graphql({ session });

    const shopifyOrder = await findOrder(client, req.params['id']);

    if (!shopifyOrder) {
        return res.status(404).send('Unable to find order');
    }

    const dfcOrder = await createDfcOrderLinesFromShopify(shopifyOrder, await getLineItemIdMappings(shopifyOrder.id));
    res.type('application/json')
    res.send(dfcOrder);
}

export default getOrderLines
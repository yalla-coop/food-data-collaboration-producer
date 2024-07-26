import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { createDfcOrderLinesFromShopify } from '../dfc/dfc-order.js';
import { findOrder } from './shopify/orders.js';
import { getLineItems } from '../../../database/line_items/lineItems.js'
const getOrderLines = async (req, res) => {
    try {
        const session = await getSession(`${req.params.EnterpriseName}.myshopify.com`)
        const client = new shopify.api.clients.Graphql({ session });

        const shopifyOrder = await findOrder(client, req.params.id);

        if (!shopifyOrder) {
            return res.status(404).send('Unable to find order');
        }

        const dfcOrder = await createDfcOrderLinesFromShopify(shopifyOrder, await getLineItems(req.params.id), req.params.EnterpriseName, req.params.id);
        res.type('application/json')
        res.send(dfcOrder);
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
}

export default getOrderLines
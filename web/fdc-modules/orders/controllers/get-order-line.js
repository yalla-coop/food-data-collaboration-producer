import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { createDfcOrderLineFromShopify } from '../dfc/dfc-order.js';
import { findOrder } from './shopify/orders.js';

const getOrderLine = async (req, res) => { 
    const session = await getSession(`${req.params.EnterpriseName}.myshopify.com`)
    const client = new shopify.api.clients.Graphql({ session });

    const shopifyOrder = await findOrder(client, req.params.id);

    if (!shopifyOrder) {
        return res.status(404).send('Unable to find order');
    }

    const dfcOrder = await createDfcOrderLineFromShopify(shopifyOrder, req.params.lineId, await getLineItemIdMappings(shopifyOrder.id), req.params.EnterpriseName, req.params.id);

    if (!dfcOrder) {
        res.status(404).send('Order ine not found');
    }
    res.type('application/json')
    res.send(dfcOrder);
}

export default getOrderLine
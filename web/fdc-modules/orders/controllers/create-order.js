import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { extractOrderAndLines, createDfcOrderFromShopify } from '../dfc/dfc-order.js';
import { findCustomer } from './shopify/customer.js';
import * as orders from './shopify/orders.js';
import * as ids from './shopify/ids.js';
import { persistLineIdMappings } from './lineItemMappings.js'
import { createDraftOrder } from '../../../database/orders/orders.js'

const createOrder = async (req, res) => {
    try {
        const session = await getSession(`${req.params.EnterpriseName}.myshopify.com`)
        const client = new shopify.api.clients.Graphql({ session });

        const customerId = await findCustomer(client, req.user.id);
        const { order, saleSession } = extractOrderAndLines(req.body)
        const shopifyLines = (await order.getLines()).map(orders.dfcLineToShopifyLine)

        const shopifyDraftOrder = await orders.createShopifyOrder(client, customerId, req.user.email, new Date(saleSession.getEndDate()), shopifyLines);

        await createDraftOrder(ids.extract(shopifyDraftOrder.id));
        const lineItemIdMappings = await persistLineIdMappings(shopifyDraftOrder)
        const dfcOrder = await createDfcOrderFromShopify(shopifyDraftOrder, lineItemIdMappings, req.params.EnterpriseName);
        res.type('application/json')
        res.send(dfcOrder);
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
}

export default createOrder;
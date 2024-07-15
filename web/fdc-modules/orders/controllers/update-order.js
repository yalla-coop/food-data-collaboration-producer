import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { extractOrderAndLines, createDfcOrderFromShopify } from '../dfc/dfc-order.js';
import * as shopifyOrders from './shopify/orders.js';
import * as ids from './shopify/ids.js';
import {persistLineIdMappings} from './lineItemMappings.js'
import loadConnectorWithResources from '../../../connector/index.js';
import * as database from '../../../database/orders/orders.js'

//todo: transaction
const updateOrder = async (req, res) => { 
    const session = await getSession(`${req.params.EnterpriseName}.myshopify.com`)
    const client = new shopify.api.clients.Graphql({ session });

    const order = extractOrderAndLines(req.body)

    if (order.getSemanticId() !== req.params.id) {
        return res.status(400).send('ID does not match payload');
    }

    const shopifyOrder = await shopifyOrders.findOrder(client, req.params.id);

    if (!shopifyOrder) {
        return res.status(404).send('Unable to find order');
    }

    const shopifyDraftOrder = await updateOrder(client, order);
    
    const lineItemIdMappings = await persistLineIdMappings(shopifyDraftOrder)
    const dfcOrder = await createDfcOrderFromShopify(shopifyDraftOrder, lineItemIdMappings, req.params.EnterpriseName);
    res.type('application/json')
    res.send(dfcOrder);
}

async function updateOrder(client, order) {
    const dfcLines = await order.getLines();
    const shopifyLines = dfcLines.map(shopifyOrders.dfcLineToShopifyLine);
    const shopifyDraftOrder = await shopifyOrders.updateOrder(client, order.getSemanticId(), shopifyLines)
    const connector = await loadConnectorWithResources();
    if (order.getOrderStatus() === connector.VOCABULARY.STATES.ORDERSTATE.COMPLETE) {
        const completedOrder = await shopifyOrders.completeDraftOrder(client, order.getSemanticId());
        await database.completeDraftOrder(ids.extract(completedOrder.id), ids.extract(completedOrder.order.id))
        return completedOrder;
    } else {
        return shopifyDraftOrder;
    }
}

export default updateOrder
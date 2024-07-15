import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { extractOrderAndLines, createDfcOrderFromShopify } from '../dfc/dfc-order.js';
import * as orders from './shopify/orders.js';
import {persistLineIdMappings} from './lineItemMappings.js'
import loadConnectorWithResources from '../../../connector/index.js';

//todo: transaction
const updateOrder = async (req, res) => { 
    const session = await getSession(`${req.params.EnterpriseName}.myshopify.com`)
    const client = new shopify.api.clients.Graphql({ session });

    const order = extractOrderAndLines(req.body)

    if (order.getSemanticId() !== req.params.id) {
        return res.status(400).send('ID does not match payload');
    }

    const shopifyOrder = await orders.findOrder(client, req.params.id);

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
    const shopifyDraftOrder = await updateShopifyOrder(client, order.getSemanticId(), await order.getLines());
    const connector = await loadConnectorWithResources();
    if (order.getOrderStatus() === connector.VOCABULARY.STATES.ORDERSTATE.COMPLETE) {
        return await completeDraftOrder(client, order.getSemanticId());
    } else {
        return shopifyDraftOrder;
    }
}

async function updateShopifyOrder(client, orderId, dfcLines) {
    const shopifyLines = dfcLines.map(orders.dfcLineToShopifyLine);
    return await orders.updateOrder(client, orderId, shopifyLines)
}

export default updateOrder
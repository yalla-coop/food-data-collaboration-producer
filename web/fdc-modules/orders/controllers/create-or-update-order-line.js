import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { extractOrderLine, createDfcOrderLineFromShopify } from '../dfc/dfc-order.js';
import { persistLineIdMappings } from './lineItemMappings.js'
import * as orders from './shopify/orders.js';
import * as ids from './shopify/ids.js'
// transaction
const createOrUpdateOrderLine = async (req, res) => {
    try {
        const session = await getSession(`${req.params.EnterpriseName}.myshopify.com`)
        const client = new shopify.api.clients.Graphql({ session });

        const orderLine = await extractOrderLine(req.body)

        const shopifyOrder = await orders.findOrder(client, req.params.id);

        if (!shopifyOrder) {
            return res.status(404).send('Unable to find order');
        }

        const updatedLines = await orders.createUpdatedShopifyLines(shopifyOrder, orderLine);
        const updatedShopifyDraftOrder = await orders.updateOrder(client, req.params.id, null, updatedLines);
        const lineItemIdMappings = await persistLineIdMappings(updatedShopifyDraftOrder);

        const externalLineId = req.params.lineId || figureOutExternalLineIdForProduct(lineItemIdMappings, await getProductId(orderLine));

        const dfcOrder = await createDfcOrderLineFromShopify(updatedShopifyDraftOrder, externalLineId, lineItemIdMappings, req.params.EnterpriseName, req.params.id);
        res.type('application/json')
        res.send(dfcOrder);
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
}

async function getProductId(dfcLine) {
    return ids.extract(await (await (await dfcLine.getOffer()).getOfferedItem()).getSemanticId());
}

function figureOutExternalLineIdForProduct(lineItemIdMappings, productId) {
    return lineItemIdMappings.find(({variantId}) => variantId === productId ).externalId;
}

export default createOrUpdateOrderLine
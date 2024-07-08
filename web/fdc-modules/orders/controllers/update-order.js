import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { extractOrderAndLines, createDfcOrderFromShopify } from '../dfc/dfc-order.js';
import { findCustomer } from './shopify/customer.js';
import { findOrder } from './shopify/orders.js';

//todo: What do we do with a draft order at the end of a sales session, "complete" it and move it to orders?

const updateOrder = async (req, res) => { 
    const session = await getSession(shopName)
    const client = new shopify.api.clients.Graphql({ session });
    const customerEmail = ''

    const order = extractOrderAndLines(req.body)

    if (order.getSemanticId() !== req.params['id']) {
        return res.status(400).send('ID does not match payload');
    }

    const shopifyOrder = await findOrder(client, customerEmail);

    if (!shopifyOrder) {
        return res.status(404).send('Unable to find order');
    }

    const shopifyDraftOrder = await updateShopifyOrder(client, order.getSemanticId(), await order.getLines());
    const dfcOrder = await createDfcOrderFromShopify(shopifyDraftOrder);
    res.type('application/json')
    res.send(dfcOrder);
}

async function updateShopifyOrder(client, orderId, dfcLines) {

    const shopifyLines = dfcLines.map(async dfcLine => {
        const offer = await dfcLine.getOffer();
        return {
            variantId: `gid://shopify/ProductVariant/${offer.getSemanticId()}`,
            quantity: dfcLine.getQuantity()
        }
    })

    const response = await client.query({
        data: {
            "query": `mutation draftOrderUpdate($id, ID!, $input: DraftOrderInput!) {
          draftOrderCreate(id: $id, input: $input) {
            userErrors {
                field
                message
            }
            draftOrder  {
                id
                lineItems(first: 250) {
                 edges {
                   node {
                      id
                      quantity
                       variant {
                           id
                           title 
                           price
                       }
                   }
                 }         
               }
            }
          }
        }`,
            "variables": {
                "id": orderId,
                "input": {
                    "lineItems": shopifyLines,
                }
            },
        },
    });

    if (response.errors) {
        console.error('Failed to update draft order', JSON.stringify(response.errors));
        throw new Error('Failed to update order');
    }

    if (response.data.draftOrderCreate.userErrors.length > 0) {
        console.error('Failed to update draft order', JSON.stringify(response.data.draftOrderCreate.userErrors));
        throw new Error('Failed to update order');
    }

    return response.data.draftOrderCreate.draftOrder
}

export default updateOrder
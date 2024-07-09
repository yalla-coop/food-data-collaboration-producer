import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { extractOrderAndLines, createDfcOrderFromShopify } from '../dfc/dfc-order.js';
import { findCustomer } from './shopify/customer.js';
import {persistLineIdMappings} from './lineItemMappings.js'

const createOrder = async (req, res) => { 
    const session = await getSession(shopName)
    const client = new shopify.api.clients.Graphql({ session });
    const customerEmail = ''

    const customerId = await findCustomer(client, customerEmail);
    const order = extractOrderAndLines(req.body)
    const shopifyDraftOrder = await createShopifyOrder(client, customerId, customerEmail, await order.getLines());

    const lineItemIdMappings = await persistLineIdMappings(shopifyDraftOrder)
    const dfcOrder = await createDfcOrderFromShopify(shopifyDraftOrder, lineItemIdMappings);
    res.type('application/json')
    res.send(dfcOrder);
}

//todo: There's an implicit limit here are of 250 line items

async function createShopifyOrder(client, customerId, customerEmail, dfcLines) {

    const shopifyLines = dfcLines.map(async dfcLine => {
        const offer = await dfcLine.getOffer();
        return {
            variantId: `gid://shopify/ProductVariant/${offer.getSemanticId()}`,
            quantity: dfcLine.getQuantity()
        }
    })

    const response = await client.query({
        data: {
            "query": `mutation draftOrderCreate($input: DraftOrderInput!) {
          draftOrderCreate(input: $input) {
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
                "input": {
                    "purchasingEntity": {
                        "customerId": customerId
                    },
                    "note": "FDC Order",
                    "email": customerEmail,
                    "lineItems": shopifyLines,
                }
            },
        },
    });

    if (response.errors) {
        console.error('Failed to create draft order', JSON.stringify(response.errors));
        throw new Error('Failed to create order');
    }

    if (response.data.draftOrderCreate.userErrors.length > 0) {
        console.error('Failed to create draft order', JSON.stringify(response.data.draftOrderCreate.userErrors));
        throw new Error('Failed to create order');
    }

    return response.data.draftOrderCreate.draftOrder
}

export default createOrder;
import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { extractOrderAndLines, createDfcOrderFromShopify } from './dfc-order.js';

const createOrder = async (req, res) => { 
    const session = await getSession(shopName)
    const client = new shopify.api.clients.Graphql({ session });
    const customerEmail = ''

    const customerId = await findCustomer(client, customerEmail);
    const order = extractOrderAndLines(req.body)
    const shopifyDraftOrder = await createShopifyOrder(client, customerId, customerEmail, await order.getLines());
    const dfcOrder = await createDfcOrderFromShopify(shopifyDraftOrder);
    res.type('application/json')
    res.send(dfcOrder);
}


async function findCustomer(client, customerEmail) {
    const response = await client.query({
        data: {
            "query": `query MyQuery($query: String) {
                customers(query: $query, first: 1) {
                  nodes {
                    id
                  }
                }
              }`,
            "variables": {
                "query": `email:${customerEmail}`
            },
        },
    });

    if (response.errors) {
        console.error('Failed to load customer', JSON.stringify(response.errors));
        throw new Error('Failed to load customer');
    }

    if (response.data.customers.nodes.length < 1) {
        throw new Error('Unable to find customer with email', customerEmail);
    }

    return response.data.customers.nodes[0].id
    
}

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
        throw new Error('Failed to create draft order');
    }

    if (response.data.draftOrderCreate.userErrors.length > 0) {
        console.error('Failed to create draft order', JSON.stringify(response.data.draftOrderCreate.userErrors));
        throw new Error('Failed to create draft order');
    }

    return response.data.draftOrderCreate.draftOrder
}


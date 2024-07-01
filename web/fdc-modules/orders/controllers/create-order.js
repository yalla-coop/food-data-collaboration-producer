import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';


const createOrder = async (req, res) => { 
    const session = await getSession(shopName)
    const client = new shopify.api.clients.Graphql({ session });
    const customerEmail = ''

    const customerId = await findCustomer(customerEmail);
    const orderId = await createShopifyOrder(customerId);

    res.send("TODO");
}


async function findCustomer(customerEmail) {

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


async function createShopifyOrder({customerId, customerEmail, lines}) {
    const response = await client.query({
        data: {
            "query": `mutation draftOrderCreate($input: DraftOrderInput!) {
          draftOrderCreate(input: $input) {
            draftOrder {
              id
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
                    "lineItems": [
                        {
                            "title": "Custom product",
                            "originalUnitPrice": 10,
                            "quantity": 1,
                        },
                        // {
                        //     "variantId": "gid://shopify/ProductVariant/43729076",
                        //     "quantity": 2
                        // }
                    ],
                }
            },
        },
    });

    if (response.errors) {
        console.error('Failed to create draft order', JSON.stringify(response.errors));
        throw new Error('Failed to create draft order');
    }

    return response.data.draftOrderCreate.draftOrder.id
}



export async function findOrder(client, orderId) {
    const response = await client.query({
        data: {
            "query": `query MyQuery($query: String) {
                draftOrder(id: "${orderId}") {
                    lineItems(first: 250) {
                        edges {
                            node {
                                id
                                quantity
                                variant {
                                    id
                                }
                            }
                        }
                    }
                }
              }`,
        },
    });

    if (response.errors) {
        console.error('Failed to load Order', JSON.stringify(response.errors));
        throw new Error('Failed to load customer');
    }

    return response.data.draftOrder;
}

export async function updateOrder(client, orderId, lines) {
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
                    "lineItems": lines,
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

export async function dfcLineToShopifyLine(dfcLine) {
        const offer = await dfcLine.getOffer();
        return {
            variantId: `gid://shopify/ProductVariant/${offer.getSemanticId()}`,
            quantity: dfcLine.getQuantity()
        }
}

export function shopifyOutputLineToInputLine(shopifyOutputLine) {
    return {
        variantId: shopifyOutputLine.node.variant.id,
        quantity: shopifyOutputLine.node.quantity
    }
}

export async function createUpdatedShopifyLines(draftOrder, dfcOrderLine){
    const existingLines = draftOrder.lineItems.edges.map(shopifyOutputLineToInputLine);
    const newLine = await dfcLineToShopifyLine(dfcOrderLine);
    return [...existingLines, newLine];
}
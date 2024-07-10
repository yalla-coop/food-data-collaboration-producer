
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

export async function createShopifyOrder(client, customerId, customerEmail, lines) {

    //todo: what should the reservation date be, we dont know the sales session details on the producer
    var reservationDate = new Date();
    reservationDate.setDate(reservationDate.getDate() + 20);

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
                    "reserveInventoryUntil": reservationDate.toISOString(),
                    "lineItems": lines,
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

    return response.data.draftOrderCreate.draftOrder;
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

function shopifyOutputLineToInputLine(shopifyOutputLine) {
    return {
        variantId: shopifyOutputLine.node.variant.id,
        quantity: shopifyOutputLine.node.quantity
    }
}

function numericPortion(id){
    return id.substring(id.lastIndexOf('/') + 1);
}

export async function createUpdatedShopifyLines(draftOrder, dfcOrderLine) {
    const { lines, hasBeenReplacement } = await draftOrder.lineItems.edges.reduce(
        async (accumulator, shopifyOutputLine) => {
            const { lines, hasBeenReplacement } = await accumulator;

            if (numericPortion(shopifyOutputLine.node.variant.id) === (await dfcOrderLine.getOffer()).getSemanticId()) {
                return { lines: [...lines, await dfcLineToShopifyLine(dfcOrderLine)], hasBeenReplacement: true };
            } else {
                return { lines: [...lines, shopifyOutputLineToInputLine(shopifyOutputLine)], hasBeenReplacement };
            }
        },
        { lines: [], hasBeenReplacement: false })

    return hasBeenReplacement ? lines : [...lines, await dfcLineToShopifyLine(dfcOrderLine)];
}
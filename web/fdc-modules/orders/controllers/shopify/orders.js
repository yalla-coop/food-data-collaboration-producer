import * as ids from './ids.js'

export async function findOrder(client, orderId) {
    const response = await client.query({
        data: {
            "query": `query MyQuery($query: String) {
                draftOrder(id: "${ids.draftOrder(orderId)}") {
                    id
                    status
                    lineItems(first: 250) {
                        edges {
                            node {
                                id
                                quantity
                                originalUnitPriceSet {
                                    shopMoney {
                                        amount
                                        currencyCode
                                    }
                                }
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
        throw new Error('Failed to load Order');
    }

    return response.data.draftOrder;
}


async function findOrdersBatch(client, orderIds) {
    const query = `
    query findDraftOrders($ids: [ID!]!) {
        draftOrders: nodes(ids: $ids) {
          ... on DraftOrder {
            id    
            status   
            lineItems(first: 250) {
                edges {
                    node {
                        id
                        quantity
                        originalUnitPriceSet {
                            shopMoney {
                                amount
                                currencyCode
                            }
                        }
                        variant {
                            id
                        }
                    }
                }
            } 
          }
        }
      }
  `;
    const response = await client.query({
        data: {
            query,
            variables: { ids: orderIds.map(ids.draftOrder) }
        }
    });

    if (response.errors) {
        console.error('Failed to load Orders', JSON.stringify(response.errors));
        throw new Error('Failed to load Orders');
    }

    return response.data.draftOrders;
}


export async function findOrders(client, orderIds) {
    const ordersChunkedUp = await Promise.all(chunks(orderIds, 250).map(async ids => await findOrdersBatch(client, ids)));
    return ordersChunkedUp.flat();
}

export async function createShopifyOrder(client, customerId, customerEmail, reservationDate, lines) {
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
                status
                lineItems(first: 250) {
                 edges {
                   node {
                      id
                      quantity
                      originalUnitPriceSet {
                        shopMoney {
                            amount
                            currencyCode
                        }
                      }
                       variant {
                           id
                           title
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
                    "tags": ['fdc'],
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
            "query": `mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
          draftOrderCreate(id: $id, input: $input) {
            userErrors {
                field
                message
            }
            draftOrder  {
                id
                status
                lineItems(first: 250) {
                 edges {
                   node {
                      id
                      quantity
                      originalUnitPriceSet {
                        shopMoney {
                            amount
                            currencyCode
                        }
                      }
                       variant {
                           id
                           title
                       }
                   }
                 }         
               }
            }
          }
        }`,
            "variables": {
                "id": `${ids.draftOrder(orderId)}`,
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

export async function completeDraftOrder(client, orderId) {
    const response = await client.query({
        data: {
            "query": `mutation CompleteDraftOrder($id: ID!) {
                draftOrderComplete(id: $id) {
                  userErrors {
                    field
                    message
                  }
                  draftOrder {
                    id
                    status
                    lineItems(first: 250) {
                        edges {
                        node {
                            id
                            quantity
                            originalUnitPriceSet {
                                shopMoney {
                                    amount
                                    currencyCode
                                }
                            }
                            variant {
                                id
                                title
                            }
                        }
                        }         
                    }
                    order {
                      id
                    }
                  }
                }
              }`,
            "variables": {
                "id": ids.draftOrder(orderId)
            },
        },
    });

    if (response.errors) {
        console.error('Failed to create draft order', JSON.stringify(response.errors));
        throw new Error('Failed to create order');
    }

    if (response.data.draftOrderComplete.userErrors.length > 0) {
        console.error('Failed to complete draft order', JSON.stringify(response.data.draftOrderComplete.userErrors));
        throw new Error('Failed to complete draft order');
    }

    return response.data.draftOrderComplete.draftOrder;
}

export async function dfcLineToShopifyLine(dfcLine) {
    const offer = await dfcLine.getOffer();
    return {
        variantId: ids.variant(offer.getSemanticId()),
        quantity: dfcLine.getQuantity()
    }
}

function shopifyOutputLineToInputLine(shopifyOutputLine) {
    return {
        variantId: shopifyOutputLine.node.variant.id,
        quantity: shopifyOutputLine.node.quantity
    }
}

export async function createUpdatedShopifyLines(draftOrder, dfcOrderLine) {
    const { lines, hasBeenReplacement } = await draftOrder.lineItems.edges.reduce(
        async (accumulator, shopifyOutputLine) => {
            const { lines, hasBeenReplacement } = await accumulator;

            if (ids.extract(shopifyOutputLine.node.variant.id) === (await dfcOrderLine.getOffer()).getSemanticId()) {
                return { lines: [...lines, await dfcLineToShopifyLine(dfcOrderLine)], hasBeenReplacement: true };
            } else {
                return { lines: [...lines, shopifyOutputLineToInputLine(shopifyOutputLine)], hasBeenReplacement };
            }
        },
        { lines: [], hasBeenReplacement: false })

    return hasBeenReplacement ? lines : [...lines, await dfcLineToShopifyLine(dfcOrderLine)];
}

function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
  }
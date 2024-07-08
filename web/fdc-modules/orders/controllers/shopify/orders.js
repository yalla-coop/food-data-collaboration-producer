
export async function findOrder(client, orderId){
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
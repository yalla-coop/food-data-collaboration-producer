export async function findCustomer(client, customerEmail) {
    const response = await client.request(`query MyQuery($query: String) {
        customers(query: $query, first: 1) {
          nodes {
            id
          }
        }
      }`, {
        variables: {
            "query": `email:${customerEmail}`
        },
    });

    if (response.errors) {
        console.error('Failed to load customer', JSON.stringify(response.errors));
        throw new Error('Failed to load customer');
    }

    if (response.data.customers.nodes.length < 1) {
        return null;
    }

    return response.data.customers.nodes[0].id
}
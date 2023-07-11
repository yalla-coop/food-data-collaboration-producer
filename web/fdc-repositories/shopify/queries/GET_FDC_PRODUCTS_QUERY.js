// The max first value is 250
export const GET_FDC_PRODUCTS_QUERY = `{
  products(first: 10, after: null, before: null) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      cursor
      node {
        id
        title
        description
        variants(first: 5) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
          edges {
            node {
              id
              title
              inventoryItem {
                id
              }
              inventoryPolicy
              availableForSale
            }
          }
        }
      }
    }
  }
}`;

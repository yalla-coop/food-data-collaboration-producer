/* eslint-disable import/prefer-default-export */

export const getFDCProductGraphQlQuery = ({
  nextPageCursor = 'null',
  previousPageCursor = 'null'
}) => {
  const after = nextPageCursor === 'null' ? '' : `after: "${nextPageCursor}"`;
  const before =
    previousPageCursor === 'null' ? '' : `before: "${previousPageCursor}"`;

  return `{
    products(first: 5, ${after}, ${before} ,query:"tag:fdc") {
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
          handle
          title
          description
          variants(first: 10) {
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
                price
                inventoryQuantity
                inventoryItem {
                  tracked
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
};

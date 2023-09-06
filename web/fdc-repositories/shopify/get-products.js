/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import { getFDCProductGraphQlQuery } from './queries/GET_FDC_PRODUCTS_QUERY.js';
import getClient from './get-client.js';

// get only products that have fdc inside tags
// this query works only for the first 10 products, we should loop through all products and get the ones that have fdc inside tags
export const getProducts = async ({
  session,
  nextPageCursor,
  previousPageCursor
}) => {
  const client = getClient(session);

  try {
    const products = await client.query({
      data: getFDCProductGraphQlQuery({
        nextPageCursor,
        previousPageCursor
      })
    });

    return {
      pageInfo: products.body.data.products.pageInfo,
      list: products.body.data.products.edges.map(({ node }) => {
        return {
          ...node,
          variants: {
            hasNextPage: node.variants.pageInfo.hasNextPage,
            list: node.variants.edges.map(({ node }) => node)
          }
        };
      })
    };
  } catch (e) {
    throw new Error(e);
  }
};

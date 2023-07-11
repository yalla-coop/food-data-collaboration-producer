import shopify from '../../shopify.js';
import { GET_FDC_PRODUCTS_QUERY } from './queries/GET_FDC_PRODUCTS_QUERY.js';
import getClient from './get-client.js';

// get only products that have fdc inside tags
// this query works only for the first 10 products, we should loop through all products and get the ones that have fdc inside tags
export const getProducts = async ({ session }) => {
  const client = getClient(session);

  try {
    const products = await client.query({
      data: GET_FDC_PRODUCTS_QUERY
    });

    return products.body.data.products.edges.map(({ node }) => {
      return {
        ...node,
        variants: node.variants.edges.map(({ node }) => node)
      };
    });
  } catch (e) {
    console.error('eee', JSON.stringify(e, null, 2));
    throw e;
  }
};

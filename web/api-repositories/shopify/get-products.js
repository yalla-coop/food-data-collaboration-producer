// get the first 250 products - this is the maximum number
// of products that can be retrieved in a single request
import shopify from '../../shopify.js';

export const getProducts = async ({ session }) => {
  const products = await shopify.api.rest.Product.all({
    session,
    limit: 250
  });
  return products;
};

export default {};

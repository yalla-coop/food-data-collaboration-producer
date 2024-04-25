// get the first 250 products - this is the maximum number
// of products that can be retrieved in a single request
import shopify from '../../shopify.js';

const limit = 250;

export const getProducts = async ({ session, lastId }) => {
  const products = await shopify.api.rest.Product.all({
    since_id: lastId || 0,
    session,
    limit: limit
  });

  if (products.length === limit) {
    const lastId = products[products.length - 1].id;
    const moreProducts = await getProducts({session, lastId});
    return [...products, ...moreProducts];
  } else {
    return products;
  }
};

export default {};

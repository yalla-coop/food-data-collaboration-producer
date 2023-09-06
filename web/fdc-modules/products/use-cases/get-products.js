import Shopify from '../../../fdc-repositories/shopify/index.js';

const getProducts = async ({ session, nextPageCursor, previousPageCursor }) => {
  const products = await Shopify.getProducts({
    session,
    nextPageCursor,
    previousPageCursor
  });
  return products;
};

export default getProducts;

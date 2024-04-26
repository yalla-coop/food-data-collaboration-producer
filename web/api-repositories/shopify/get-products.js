import shopify from '../../shopify.js';

const limit = 250;

export const getProducts = async ({ session }) => {
  const products = await getProductsUntilNoneLeft(session);
  return products.sort(function(a, b) {
    return a.title.localeCompare(b.title);
 });
};

async function getProductsUntilNoneLeft(session, lastId) {
  const products = await shopify.api.rest.Product.all({
    since_id: lastId || 0,
    session,
    limit: limit
  });

  if (products.length === limit) {
    const lastId = products[products.length - 1].id;
    const moreProducts = await getProductsUntilNoneLeft(session, lastId);
    return [...products, ...moreProducts];
  } else {
    return products;
  }
}

export default {};

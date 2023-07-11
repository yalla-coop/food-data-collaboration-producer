import Shopify from '../../../api-repositories/shopify/index.js';

const getProducts = async ({ session }) => {
  const products = await Shopify.getProducts({ session });
  return products;
};

export default getProducts;

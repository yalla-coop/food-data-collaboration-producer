import Shopify from '../../../api-repositories/shopify/index.js';
import { getAndAddVariantsToProducts } from '../../../database/variants/variants.js';

const getProducts = async ({ session }) => {
  const products = await Shopify.getProducts({ session });
  return await getAndAddVariantsToProducts(products);
};

export default getProducts;

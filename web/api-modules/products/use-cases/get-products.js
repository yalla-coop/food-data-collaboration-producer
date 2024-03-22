import Shopify from '../../../api-repositories/shopify/index.js';
import { addVariantsToProducts } from '../../../database/variants/variants.js';

const getProducts = async ({ session }) => {
  const products = await Shopify.getProducts({ session });
  return await addVariantsToProducts(products);
};

export default getProducts;

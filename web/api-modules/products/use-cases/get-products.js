import Shopify from '../../../api-repositories/shopify/index.js';
import { query } from '../../../database/connect.js';

const getProducts = async ({ session }) => {
  const products = await Shopify.getProducts({ session });

  const mappings = (await query(`SELECT * FROM fdc_variants`)).rows.reduce((accumulator, row) => {
    const productId = row.productId;
    return {
      ...accumulator,
      [productId]: accumulator[productId] ? [...accumulator[productId], row] : [row]
    };
  }, {});

  return products.map(product => ({...product, fdcVariants: mappings[product.id] || []}))
};

export default getProducts;

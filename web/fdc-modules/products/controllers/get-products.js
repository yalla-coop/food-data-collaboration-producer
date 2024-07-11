import shopify from '../../../shopify.js';
import getSession from '../../../utils/getShopifySession.js';
import { createDFCProductsFromShopify } from '../dfc/dfc-products.js';
import { findFDCProducts, getFdcVariantsFromDB } from './shopify/products.js';

const getProducts = async (req, res) => {
  try {
    const { shop } = req.query;

    const session = await getSession(shop);
    const client = new shopify.api.clients.Graphql({ session });

    const fdcVariantsFromDB = await getFdcVariantsFromDB();

    if (Object.keys(fdcVariantsFromDB).length === 0) {
      return res.status(200).json([]);
    }

    const fdcProducts = await findFDCProducts(
      client,
      Object.keys(fdcVariantsFromDB)
    );

    const dfcProducts = await createDFCProductsFromShopify(
      fdcProducts,
      fdcVariantsFromDB
    );

    return res.status(200).json(dfcProducts);
  } catch (error) {
    console.error('Unable to load products', error);
    throw new Error(error);
  }
};

export default getProducts;

import shopify from '../../../shopify.js';
import { createDFCProductsFromShopify } from '../dfc/dfc-products.js';
import { findFDCProducts, getFdcVariantsFromDB } from './shopify/products.js';

const getProducts = async (req, res) => {
  try {
    const { shopifySession } = req;

    const fdcVariantsFromDB = await getFdcVariantsFromDB();

    if (Object.keys(fdcVariantsFromDB).length === 0) {
      return res.status(200).json({
        products: [],
        success: true,
        message: 'No products found'
      });
    }

    const client = new shopify.api.clients.Graphql({ shopifySession });

    const fdcProducts = await findFDCProducts(
      client,
      Object.keys(fdcVariantsFromDB)
    );

    const dfcProducts = await createDFCProductsFromShopify(
      fdcProducts,
      fdcVariantsFromDB
    );

    return res.status(200).json({
      products: dfcProducts,
      success: true,
      message: 'Products retrieved successfully'
    });
  } catch (error) {
    console.error('Unable to load products', error);
    throw new Error(error);
  }
};

export default getProducts;

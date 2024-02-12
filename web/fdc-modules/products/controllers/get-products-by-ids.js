import { exportSuppliedProducts } from '../../../connector/productUtils.js';
import shopify from '../../../shopify.js';

const getProductsByIds = async (req, res) => {
  const { body } = req;
  const { ids } = body;
  const { shopifySession } = req;

  if (!ids) {
    return res.status(400).json({
      success: false,
      message: 'Missing ids array'
    });
  }
  const idsArray = ids.split(',');

  if (idsArray.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Empty ids array'
    });
  }

  if (idsArray.length > 250) {
    return res.status(400).json({
      success: false,
      message: 'Maximum of 250 ids allowed'
    });
  }

  try {
    const products = await shopify.api.rest.Product.all({
      session: shopifySession,
      ids,
      limit: 250
    });

    const exportedDFCProducts = await exportSuppliedProducts(products);

    return res.status(200).json({
      products: exportedDFCProducts,
      success: true,
      message: 'Products retrieved successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error retrieving products'
    });
  }
};

export default getProductsByIds;

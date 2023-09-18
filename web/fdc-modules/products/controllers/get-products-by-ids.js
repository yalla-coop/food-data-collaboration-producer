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

  if (ids?.split(',')?.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Empty ids array'
    });
  }

  if (ids.length > 250) {
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

    return res.status(200).json({
      products,
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

import getProductsUseCase from '../use-cases/get-products.js';

const getProducts = async (req, res) => {
  try {
    const { shopifySession } = req;
    const { sinceId } = req.query;

    const { products, lastId } = await getProductsUseCase({
      session: shopifySession,
      sinceId
    });

    return res.status(200).json({
      products,
      lastId,
      success: true,
      message: 'Products retrieved successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error retrieving products',
      error: error.message
    });
  }
};

export default getProducts;

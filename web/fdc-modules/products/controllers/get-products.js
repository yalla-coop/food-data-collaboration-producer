import getProductsUseCase from '../use-cases/get-products.js';

const getProducts = async (req, res) => {
  try {
    const { shopifySession } = req;
    const { sinceId, remainingProductsCountBeforeNextFetch } = req.query;

    // const { accessToken, userId } = req.body;

    const {
      products,
      lastId,
      remainingProductsCount: remainingProductsCountAfter,
      dfcTestProductExports
    } = await getProductsUseCase({
      session: shopifySession,
      sinceId,
      remainingProductsCount: remainingProductsCountBeforeNextFetch
    });

    return res.status(200).json({
      products,
      lastId,
      remainingProductsCountAfter,
      success: true,
      message: 'Products retrieved successfully',
      dfcTestProductExports
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

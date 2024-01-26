import getProductsUseCase from '../use-cases/get-products.js';

const getProducts = async (req, res) => {
  try {
    const { shopifySession } = req;
    const { sinceId, remainingProductsCountBeforeNextFetch } = req.query;

    const {
      products,
      lastId,
      remainingProductsCount: remainingProductsCountAfter,
      exportedDFCProducts
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
      exportedDFCProducts
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

import ProductUseCases from '../use-cases/index.js';

const getProducts = async (req, res, next) => {
  try {
    const {shopifySession} = req;

    const products = await ProductUseCases.getProducts({
      session: shopifySession
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

export default getProducts;

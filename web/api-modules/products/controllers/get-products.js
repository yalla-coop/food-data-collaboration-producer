import ProductUseCases from '../use-cases/index.js';

const getProducts = async (req, res) => {
  try {
    const { shopifySession } = req;

    const products = await ProductUseCases.getProducts({
      session: shopifySession
    });

    if (!products.length) {
      return res.status(200).json('No products found');
    }

    return res.status(200).json({
      products,
      variantMappingEnabled: String(process.env.VARIANT_MAPPINGS).toLowerCase() === 'true',
      success: true,
      message: 'Products retrieved successfully'
    });
  } catch (error) {
    console.error('Error retrieving products', error);
    return res.status(500).json({
      success: false,
      message: 'Error retrieving products'
    });
  }
};

export default getProducts;

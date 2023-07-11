import ProductUseCases from '../use-cases/index.js';

const editProductById = async (req, res) => {
  try {
    const { shopifySession } = req;
    const { id: productId } = req.params;

    const updatedProduct = await ProductUseCases.editProductById({
      session: shopifySession,
      productId
    });

    return res.status(200).json({
      product: updatedProduct,
      success: true,
      message: 'Product updated successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error updating product'
    });
  }
};

export default editProductById;

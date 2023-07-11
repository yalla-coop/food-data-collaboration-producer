import Shopify from '../../../api-repositories/shopify/index.js';

const editProductById = async ({ session, productId }) => {
  const updatedProduct = await Shopify.editProductById({
    session,
    productId
  });

  return updatedProduct;
};

export default editProductById;

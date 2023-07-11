import shopify from '../../shopify.js';

const editProductFdcTagsById = async ({ session, productId }) => {
  const oldProduct = await shopify.api.rest.Product.find({
    session,
    id: productId
  });

  const isFdcProduct = oldProduct.tags.includes('fdc');

  const updateProduct = new shopify.api.rest.Product({ session });
  updateProduct.id = productId;

  if (isFdcProduct) {
    updateProduct.tags = oldProduct.tags.replace('fdc', '');
  } else {
    updateProduct.tags = `${oldProduct.tags},fdc`;
  }

  await updateProduct.saveAndUpdate();

  return updateProduct;
};

export default editProductFdcTagsById;

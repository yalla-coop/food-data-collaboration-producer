import shopify from '../../../shopify.js';

const getProductById = async (client, productId) => {
  const query = `
    query getProduct($id: ID!) {
      product(id: $id) {
        id
        tags
      }
    }
  `;
  const response = await client.request(query, {
    variables: { id: `gid://shopify/Product/${productId}` }
  });

  return response.data.product;
};

const updateProductTags = async (client, productId, tags) => {
  const mutation = `
    mutation productUpdate($input: ProductInput!) {
      productUpdate(input: $input) {
        product {
          id
          tags
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  const response = await client.request(mutation, {
    variables: {
      input: {
        id: `gid://shopify/Product/${productId}`,
        tags
      }
    }
  });

  if (response.data.productUpdate.userErrors.length > 0) {
    console.error(
      'Failed to update product tags',
      JSON.stringify(response.data.productUpdate.userErrors)
    );
    throw new Error(response.data.productUpdate.userErrors[0].message);
  }

  return response.data.productUpdate.product;
};

const editProductFdcTagsByProductId = async ({ client, productId }) => {
  const oldProduct = await getProductById(client, productId);

  const isFdcProduct = oldProduct.tags.includes('fdc');

  let newTags;

  if (isFdcProduct) {
    newTags = oldProduct.tags.filter((tag) => tag !== 'fdc');
  } else {
    newTags = [...oldProduct.tags, 'fdc'];
  }

  const updatedProduct = await updateProductTags(client, productId, newTags);

  return updatedProduct;
};

const editProductById = async ({ session, productId }) => {
  const client = new shopify.api.clients.Graphql({ session });

  const updatedProduct = await editProductFdcTagsByProductId({
    client,
    productId
  });

  return updatedProduct;
};

export default editProductById;

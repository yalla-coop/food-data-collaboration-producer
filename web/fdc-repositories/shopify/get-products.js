import shopify from '../../shopify.js';

const getProducts = async ({ session, sinceId = '0' }) => {
  try {
    const products = await shopify.api.rest.Product.all({
      session,
      limit: 250,
      since_id: sinceId
    });

    if (!products.length) {
      return {
        products: [],
        sinceId: null
      };
    }

    const lastId = products[products.length - 1].id;

    const fdcProducts = products.filter(({ tags }) => tags.includes('fdc'));

    return {
      products: fdcProducts,
      lastId
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default getProducts;

import ProductUseCases from '../use-cases/index.js';
const getProducts = async (req, res, next) => {
  console.log('getProducts', req.url);

  try {
    return res.json({
      success: true
    });
    // const shopify = await getShopifyApiNode();

    // const products = await shopify.product.list();
    // return res.json({
    //   success: true,
    //   products
    // });
  } catch (e) {
    console.log('error', e);
    return res.status(500).json({
      success: false,
      message: 'Error retrieving products'
    });
  }

  const session = res?.locals?.shopify?.session;

  console.log('session', session);

  try {
    const products = await ProductUseCases.getProducts({session});

    res.locals.products = products;

    return next();
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      success: false,
      message: 'Error retrieving products'
    });
  }
};

export default getProducts;

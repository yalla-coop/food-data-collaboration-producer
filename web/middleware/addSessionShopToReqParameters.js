const addSessionShopToReqParams = (req, res, next) => {
  console.log('addSessionShopToReqParams', req.url);
  console.log('addSessionShopToReqParams', req.query);

  console.log('res.locals', res?.locals?.shopify?.session);

  const shop = res.locals?.shopify?.session?.shop;
  if (shop && !req.query.shop) {
    req.query.shop = shop;
  }
  return next();
};

export default addSessionShopToReqParams;

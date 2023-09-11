const checkOnlineSession = async (req, res, next) => {
  try {
    const session = res?.locals?.shopify?.session;

    if (!session) {
      return res.status(500).json({
        error: 'Missing shopify session'
      });
    }

    req.shopifySession = session;

    return next();
  } catch (err) {
    return res.status(500).json({
      error: 'Error checking offline session'
    });
  }
};

export default checkOnlineSession;

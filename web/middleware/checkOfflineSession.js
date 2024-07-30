
import getShopifySessionsData from '../database/shopify_sessions/getShopifySessionsData.js';
import shopify from '../shopify.js';

const checkOfflineSession = async (req, res, next) => {
  try {
    const { shop: shopName } = req.query;

    if (!shopName) {
      res.status(400).json({
        error: 'Missing shopName query parameter'
      });
      return;
    }

    const session = await getOfflineSessionByShopName(shopName);

    if (!session) {
      res.status(400).json({
        error: `No offline session found for store ${shopName}`
      });
      return;
    }

    req.shopifySession = session;

    next();
  } catch (err) {
    res.status(500).json({
      error: 'Error checking offline session'
    });
  }
};

const getOfflineSessionByShopName = async (shopName) => {
  const id = shopify.api.session.getOfflineId(shopName);

  const session = await getShopifySessionsData(id);

  if (!session) {
    return;
  }

  return session;
};


export default checkOfflineSession;

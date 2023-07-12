import { getOfflineSessionByShopName } from '../fdc-repositories/shopify/get-offline-session-by-shop-name.js';

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

export default checkOfflineSession;

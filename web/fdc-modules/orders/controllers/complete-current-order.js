import shopify from '../../../shopify.js';
import {
  createOrder,
  releaseFulfillmentOrder
} from '../../../utils/handleShopifyOrders.js';
const completeCurrentOrder = async (req, res) => {
  try {
    const { shop: shopName } = req.query;
    const { id: orderId } = req.params;

    const sessions = await shopify.config.sessionStorage.findSessionsByShop(
      shopName
    );
    if (!sessions.length) {
      return res.status(500).json({
        success: false,
        message: `No session found for store ${shopName}`
      });
    }

    const currentSession = sessions[0];

    if (!currentSession || !currentSession.accessToken) {
      return res.status(500).json({
        success: false,
        message: `No access token found for store ${shopName}`
      });
    }
    const finalOrderDetails = {
      id: orderId,
      tags: 'FDC FINAL order'
    };

    const order = await createOrder(currentSession, finalOrderDetails);

    await releaseFulfillmentOrder(currentSession, order?.id);

    return res.status(200).json({
      order
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
};

export default completeCurrentOrder;

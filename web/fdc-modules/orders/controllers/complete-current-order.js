import shopify from '../../../shopify.js';

export const completeCurrentShopifyOrder = async ({ session, id }) => {
  const order = new shopify.api.rest.Order({
    session
  });

  order.id = id;
  order.tags = 'FDC order,completed';
  await order.saveAndUpdate();
  await order.close({});

  return order;
};

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
    const order = await completeCurrentShopifyOrder({
      session: currentSession,
      id: orderId
    });

    return res.status(200).json({
      order
    });
  } catch (err) {
    console.log('error completing order', err);
    return res.status(500).json({
      error: err.message
    });
  }
};

export default completeCurrentOrder;

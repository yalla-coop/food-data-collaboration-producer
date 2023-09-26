import shopify from '../../../shopify.js';

const createBaseDraftOrder = async (req, res, next) => {
  try {
    const { shop: shopName } = req.query;

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

    // I am thinking of create an order for the first time , and then cancel it and create a new one
    // for the first time when we don't have any order , then I'll create a fake product
    // and add it to the order

    const order = new shopify.api.rest.Order({
      session: currentSession
    });

    order.line_items = [{ title: 'test-product', quantity: 1, price: 0 }];
    order.tags = 'FDC order';

    order.customer = {
      first_name: 'Mark',
      last_name: 'Claydon',
      email: 'mark@yallacooperative.com'
    };

    order.note = 'hassanstroe.myshopify.com';

    await order.save({
      update: true
    });

    return res.status(200).json({
      success: true,
      message: 'Order retrieved successfully',
      order
    });
  } catch (error) {
    return next(error);
  }
};

export default createBaseDraftOrder;

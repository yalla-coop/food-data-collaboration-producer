import getSession from '../../../utils/getShopifySession.js';

import {
  createOrder,
  holdFulfillmentOrder
} from '../../../utils/handleShopifyOrders.js';

// I am thinking of create an order for the first time , and then cancel it and create a new one
// for the first time when we don't have any order , then I'll create a fake product
// and add it to the order

const createBaseDraftOrder = async (req, res, next) => {
  try {
    const { shop: shopName } = req.query;
    const session = await getSession(shopName);

    if (!session.accessToken) {
      return res.status(403).json({
        success: false,
        message: `No access token found for store ${shopName}`
      });
    }

    const orderDetails = {
      line_items: [{ title: 'test-product', quantity: 1, price: 0 }],
      tags: 'FDC part order',
      // TODO: Replace with actual customer details
      customer: {
        first_name: 'Mark',
        last_name: 'Claydon',
        email: 'mark@yallacooperative.com'
      },
      // TODO: Replace with actual shipping address
      note: 'hassanstroe.myshopify.com',
      financial_status: 'pending'
    };

    const order = await createOrder(session, orderDetails);
    await holdFulfillmentOrder(session, order);

    return res.status(200).json({
      success: true,
      message: 'Order retrieved successfully',
      order
    });
  } catch (error) {
    if (error.message.includes('No session')) {
      return res.status(404).json({ success: false, message: error.message });
    }
    return next(error);
  }
};

export default createBaseDraftOrder;

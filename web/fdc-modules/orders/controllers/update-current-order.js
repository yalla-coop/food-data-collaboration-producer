import shopify from '../../../shopify.js';
import importDFCConnectorOrder, {
  importDFCConnectorCustomer
} from '../../../connector/ordersUtils.js';
import { throwError } from '../../../utils/index.js';
import {
  createOrder,
  holdFulfillmentOrder
} from '../../../utils/handleShopifyOrders.js';

export const cancelOrderAndThenDeleted = async ({ session, id }) => {
  const orderDetails = {
    id
  };
  const order = await createOrder(session, orderDetails);

  await order.cancel({
    restock: true
  });

  await shopify.api.rest.Order.delete({
    session,
    id
  });
};

const testProductCancellation = [
  {
    title: 'test-product',
    description: 'no more items required due to cancellation',
    quantity: 1,
    price: 0,
    variant_id: 1
  }
];

export const aggregateLineItems = (orderType, lineItems) => {
  let hasNoMoreItems = false;
  const aggregatedLineItems = lineItems.reduce((acc, lineItem) => {
    const existingLineItem = acc.find(
      (item) => Number(item.variant_id) === Number(lineItem.variant_id)
    );

    if (existingLineItem) {
      // add the quantity if the order type is completed or subtract if the type is cancelled
      if (orderType === 'completed') {
        existingLineItem.quantity =
          Number(existingLineItem.quantity) + Number(lineItem.quantity);
      } else {
        existingLineItem.quantity =
          Number(existingLineItem.quantity) - Number(lineItem.quantity);
        if (existingLineItem.quantity === 0) {
          hasNoMoreItems = true;
        }
      }
    } else {
      acc.push({
        variant_id: Number(lineItem.variant_id),
        quantity: Number(lineItem.quantity)
      });
    }

    return acc;
  }, []);
  // return the test product if the quantity is 0
  return hasNoMoreItems ? testProductCancellation : aggregatedLineItems;
};

export const createNewOrderBasedOnCurrentOrder = async ({
  orderType,
  session,
  orderId,
  lineItems,
  customer
}) => {
  try {
    const currentOrder = await shopify.api.rest.Order.find({
      session,
      id: orderId,
      fields: 'id,line_items,name,total_price'
    });

    if (!currentOrder) {
      throwError(`No order found for id ${orderId}`);
    }
    const updatedLineItems = aggregateLineItems(orderType, [
      ...currentOrder.line_items,
      ...lineItems
    ]).filter((item) => Number(item.variant_id) !== 0);

    const orderDetails = {
      customer,
      note: customer?.email ?? 'test@yallacooperative.com',
      line_items: updatedLineItems,
      inventory_behaviour: 'decrement_obeying_policy',
      tags: 'FDC part order',
      financial_status: 'pending'
    };
    const newOrder = await createOrder(session, orderDetails);

    if (!newOrder) {
      throwError('Failed to create new order based on current order');
    }
    await cancelOrderAndThenDeleted({
      session,
      id: orderId
    });

    return newOrder;
  } catch (err) {
    throwError('Error creating new order based on current order', err);
  }
};

const updateCurrentOrder = async (req, res, next) => {
  try {
    const { shop: shopName, orderType = 'completed' } = req.query;
    const { id: orderId } = req.params;

    const { exportedOrder, exportedCustomer } = req.body;

    if (!exportedOrder || !exportedCustomer) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields ${!exportedOrder ? 'order' : ''} ${
          !exportedCustomer ? 'customer' : ''
        }`
      });
    }

    const importedOrder = await importDFCConnectorOrder(exportedOrder);

    const importedCustomer = await importDFCConnectorCustomer(exportedCustomer);

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

    const newOrder = await createNewOrderBasedOnCurrentOrder({
      orderType,
      session: currentSession,
      orderId,
      lineItems: importedOrder,
      customer: importedCustomer
    });

    await holdFulfillmentOrder(currentSession, newOrder);

    return res.status(200).json({
      success: true,
      message: 'Order deleted successfully',
      order: newOrder
    });
  } catch (error) {
    return next(error);
  }
};

export default updateCurrentOrder;

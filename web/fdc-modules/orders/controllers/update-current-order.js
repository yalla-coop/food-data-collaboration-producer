import shopify from '../../../shopify.js';
import importDFCConnectorOrder, {
  importDFCConnectorCustomer
} from '../../../connector/ordersUtils.js';
import { throwError } from '../../../utils/index.js';
import {
  createOrder,
  holdFulfillmentOrder
} from '../../../utils/handleShopifyOrders.js';
import { aggregateLineItems } from '../../../utils/aggregateLineItems.js';

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

    console.log(
      `Creating order to replace ${orderId} with new line items: ${JSON.stringify(
        lineItems
      )}\n Setting line items to: ${JSON.stringify(updatedLineItems)}`
    );

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
    console.error(
      `Error processing order!: ${req.params.id} ${req.query.orderType}`,
      error,
      error.stack
    );
    return next(error);
  }
};

export default updateCurrentOrder;

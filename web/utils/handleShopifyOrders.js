import { throwError } from './index.js';
import shopify from '../shopify.js';

async function createOrder(session, orderDetails) {
  try {
    const order = new shopify.api.rest.Order({ session });
    Object.assign(order, orderDetails);
    await order.save({ update: true });
    return order;
  } catch (error) {
    throwError('Failed to create order: ', error.message);
  }
  return null;
}

async function getFulfillmentOrder(session, orderId) {
  try {
    const fulfillmentOrders = await shopify.api.rest.FulfillmentOrder.all({
      session,
      order_id: orderId
    });

    return fulfillmentOrders?.[0];
  } catch (error) {
    throwError('Failed to get fulfillment order: ', error.message);
  }
  return null;
}

async function holdFulfillmentOrder(session, order) {
  try {
    const fulfillmentOrder = await getFulfillmentOrder(session, order.id);

    await fulfillmentOrder.hold({
      body: {
        fulfillment_hold: {
          reason: 'other',
          reason_notes: 'This order is part of an active sales session',
          fulfillment_order_line_items: fulfillmentOrder.line_items
        }
      }
    });

    return fulfillmentOrder;
  } catch (error) {
    throwError('Failed to hold fulfillment order: ', error.message);
  }
  return null;
}

async function releaseFulfillmentOrder(session, orderId) {
  try {
    const fulfillmentOrder = await getFulfillmentOrder(session, orderId);

    await fulfillmentOrder.release_hold({});
  } catch (error) {
    throwError('Failed to release fulfillment order: ', error.message);
  }
}

export { createOrder, holdFulfillmentOrder, releaseFulfillmentOrder };

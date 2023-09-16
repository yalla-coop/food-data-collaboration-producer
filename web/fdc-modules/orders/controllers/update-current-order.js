import shopify from '../../../shopify.js';

export const cancelOrderAndThenDeleted = async ({ session, id }) => {
  const order = new shopify.api.rest.Order({
    session
  });

  order.id = id;
  await order.cancel({
    restock: true
  });

  await shopify.api.rest.Order.delete({
    session,
    id
  });
};

export const aggregateLineItems = (lineItems) => {
  const aggregatedLineItems = lineItems.reduce((acc, lineItem) => {
    const existingLineItem = acc.find(
      (item) => item.variant_id === lineItem.variant_id
    );

    if (existingLineItem) {
      existingLineItem.quantity =
        Number(existingLineItem.quantity) + Number(lineItem.quantity);
    } else {
      acc.push(lineItem);
    }

    return acc;
  }, []);

  return aggregatedLineItems;
};

export const createNewOrderBasedOnCurrentOrder = async ({
  session,
  orderId,
  lineItems
}) => {
  try {
    const currentOrder = await shopify.api.rest.Order.find({
      session,
      id: orderId,
      fields: 'id,line_items,name,total_price'
    });

    if (!currentOrder) {
      throw new Error(`No order found for id ${orderId}`);
    }

    await cancelOrderAndThenDeleted({
      session,
      id: orderId
    });

    const newOrder = new shopify.api.rest.Order({
      session
    });

    newOrder.line_items = aggregateLineItems([
      ...currentOrder.line_items,
      ...lineItems
    ]);
    newOrder.inventory_behaviour = 'decrement_obeying_policy';
    newOrder.tags = 'FDC order';

    await newOrder.saveAndUpdate();

    return newOrder;
  } catch (err) {
    throw new Error(err);
  }
};

const updateCurrentOrder = async (req, res, next) => {
  try {
    const { shop: shopName } = req.query;
    const { id: orderId } = req.params;

    const { lineItems } = req.body;

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
      session: currentSession,
      orderId,
      lineItems
    });

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

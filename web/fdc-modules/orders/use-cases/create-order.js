import Shopify from '../../../fdc-repositories/shopify/index.js';

const createOrder = async ({order, shopName, accessToken}) => {
  const inventoryLevels = await Shopify.checkInventory({
    lineItems: order.lineItems,
    accessToken,
    shopName
  });

  const availableInventoryLevels = inventoryLevels.filter(
    (inventoryLevel) => inventoryLevel.isAvailable
  );

  if (availableInventoryLevels.length === 0) {
    return {
      success: false,
      message: 'No inventory available'
    };
  }

  const availableLineItems = order.lineItems.filter((lineItem) => {
    const inventoryLevel = availableInventoryLevels.find(
      (inventoryLevel) =>
        inventoryLevel.inventory_item_id === lineItem.inventory_item_id
    );

    return inventoryLevel;
  });

  const createdOrder = await Shopify.createOrder({
    lineItems: availableLineItems,
    shopName,
    orderData: order
  });

  return {
    success: true,
    message: 'Draft order created successfully',
    availableLineItems,
    order: createdOrder
  };
};

export default createOrder;

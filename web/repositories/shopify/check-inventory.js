import {getShopifyApiNodeByShopNameAndAccessToken} from '../../shopify.js';
import {getOfflineSessionByShopName} from './get-offline-session-by-shop-name.js';
import shopify from '../../shopify.js';
// check the inventory of the line items in the cart
// create the order
// update the inventory level of this item

const createResponse = (lineItems, inventoryLevel) => {
  const isItemTracked = inventoryLevel.available !== null;

  const itemQuantity = lineItems.find((lineItem) => {
    return lineItem.inventory_item_id === inventoryLevel.inventory_item_id;
  }).quantity;

  const isAvailable = isItemTracked
    ? inventoryLevel.available >= itemQuantity
    : true;

  return {
    quantity: itemQuantity,
    isAvailable,
    inventory_item_id: inventoryLevel.inventory_item_id,
    location_id: inventoryLevel.location_id,
    isItemTracked
  };
};

const checkInventory = async ({lineItems, shopName}) => {
  const session = await getOfflineSessionByShopName(shopName);

  const inventoryItemIds = lineItems
    .map((lineItem) => {
      return lineItem.inventory_item_id;
    })
    .join(',');

  const inventoryLevels = await shopify.api.rest.InventoryLevel.all({
    session: session,
    inventory_item_ids: inventoryItemIds
  });

  return inventoryLevels.map((inventoryLevel) =>
    createResponse(lineItems, inventoryLevel)
  );
};

export default checkInventory;

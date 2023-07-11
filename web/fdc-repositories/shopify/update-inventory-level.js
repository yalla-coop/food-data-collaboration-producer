import {getOfflineSessionByShopName} from './get-offline-session-by-shop-name.js';
import shopify from '../../shopify.js';

const updateInventoryLevel = async ({
  inventoryItemId,
  quantity,
  locationId,
  shopName
}) => {
  const session = await getOfflineSessionByShopName(shopName);

  const a = await new shopify.api.rest.InventoryLevel({
    session: session
  }).adjust({
    available_adjustment: -quantity,
    inventory_item_id: inventoryItemId,
    location_id: locationId
  });
};

export default updateInventoryLevel;

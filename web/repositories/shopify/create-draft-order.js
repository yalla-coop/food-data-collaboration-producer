import {getOfflineSessionByShopName} from './get-offline-session-by-shop-name.js';
import shopify from '../../shopify.js';

const createDraftOder = async ({lineItems, shopName}) => {
  const session = await getOfflineSessionByShopName(shopName);

  await new shopify.api.rest.DraftOrder({
    session: session,
    fromData: {
      line_items: lineItems
    }
  }).save({
    update: false
  });
};

export default createDraftOder;

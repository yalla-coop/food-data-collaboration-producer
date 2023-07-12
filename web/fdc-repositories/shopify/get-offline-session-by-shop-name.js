import {DB} from '../../db.js';
import shopify from '../../shopify.js';

export const getOfflineSessionByShopName = async (shopName) => {
  const id = shopify.api.session.getOfflineId(shopName);

  const session = await DB.read(id);

  if (!session) return undefined;

  return session;
};
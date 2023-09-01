/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import getShopifySessionsData from '../../database/shopify_sessions/getShopifySessionsData.js';
import shopify from '../../shopify.js';

export const getOfflineSessionByShopName = async (shopName) => {
  const id = shopify.api.session.getOfflineId(shopName);

  const session = await getShopifySessionsData(id);

  if (!session) {
    return;
  }

  return session;
};

import shopify from '../../shopify.js';
import getShopifySessionsData from '../../database/shopify_sessions/getShopifySessionsData.js';

export const getOfflineAccessTokenByShopName = async (shopName) => {
  const id = shopify.api.session.getOfflineId(shopName);

  const session = await getShopifySessionsData(id);
  if (!session) {
    return undefined;
  }

  return session.accessToken;
};

export default getOfflineAccessTokenByShopName;

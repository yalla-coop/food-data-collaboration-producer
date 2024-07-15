import shopify from '../shopify.js';

async function getSession(shopName) {
  const sessions = await shopify.config.sessionStorage.findSessionsByShop(
    shopName
  );
  if (!sessions.length) {
    console.error(`No session found for ${shopName}`);
    return;
  }
  return sessions[0];
}

export default getSession;

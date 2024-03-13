import shopify from '../shopify.js';
import { throwError } from './index.js';

async function getSession(shopName) {
  const sessions = await shopify.config.sessionStorage.findSessionsByShop(
    shopName
  );
  if (!sessions.length) {
    throwError(`No session found for store ${shopName}`);
  }
  return sessions[0];
}

export default getSession;

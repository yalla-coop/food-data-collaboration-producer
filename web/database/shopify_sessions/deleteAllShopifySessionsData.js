import { query } from '../connect.js';

const deleteAllShopifySessionsData = async () => {
  const sql = 'DELETE FROM shopify_sessions';

  try {
    await query(sql);
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteAllShopifySessionsData;

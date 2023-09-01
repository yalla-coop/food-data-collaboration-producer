import { query } from '../connect.js';

const getShopifySessionsData = async (shopifySessionId) => {
  const sql = 'SELECT * FROM shopify_sessions WHERE id = $1';
  const params = [shopifySessionId];

  try {
    const res = await query(sql, params);
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default getShopifySessionsData;

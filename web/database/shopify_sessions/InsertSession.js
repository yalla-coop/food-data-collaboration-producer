/* eslint-disable object-curly-newline */
import { query } from '../connect.js';

const insertSession = async ({ id, shop, state, accessToken }) => {
  const sql = `
    INSERT INTO shopify_sessions
    (id, accessToken, shop, state,isOnline)
    VALUES
    ($1, $2, $3, $4,0)
    RETURNING *
    `;

  const values = [id, accessToken, shop, state];
  try {
    const result = await query(sql, values);
    return result.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default insertSession;

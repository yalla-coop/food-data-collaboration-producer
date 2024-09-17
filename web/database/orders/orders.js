import { pool } from '../connect.js';

export const createDraftOrder = async (draftOrderId, openIdUserId) => {
  const result = await pool.query(
    `
            INSERT INTO orders (draft_order_id, owner_id)
            VALUES ($1, (SELECT "id" from users where user_id = $2))
            RETURNING *;
        `,
    [draftOrderId, openIdUserId]
  );
  return result.rows;
};

export const completeDraftOrder = async (draftOrderId, completedOrderId) => {
  const result = await pool.query(
    `
            UPDATE orders set completed_order_id = $2
            WHERE draft_order_id = $1
            RETURNING *;
        `,
    [draftOrderId, completedOrderId]
  );
  return result.rows;
};

export const getOrder = async (draftOrderId, openIdUserId) => {
  const result = await pool.query(
    `SELECT draft_order_id as "draftOrderId", completed_order_id as "completedOrderId", owner_id as "ownerId" from orders where draft_order_id = $1 AND owner_id = (select id from users where user_id = $2)`,
    [draftOrderId, openIdUserId]
  );
  return result.rows && result.rows.length === 1 ? result.rows[0] : null;
};

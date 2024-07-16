import { pool } from '../connect.js'

export const createDraftOrder = async (draftOrderId) => {
    const result = await pool.query(`
            INSERT INTO orders (draft_order_id)
            VALUES ($1)
            RETURNING *;
        `, [draftOrderId]);
    return result.rows;
};

export const completeDraftOrder = async (draftOrderId, completedOrderId) => {
    const result = await pool.query(`
            UPDATE orders set completed_order_id = $2
            WHERE draft_order_id = $1
            RETURNING *;
        `, [draftOrderId, completedOrderId]);
    return result.rows;
};

export const getOrders = async () => {
    const result = await pool.query(`SELECT draft_order_id as "draftOrderId", completed_order_id as "completedOrderId" from orders order by draft_order_id`, []);
    return result.rows;
}
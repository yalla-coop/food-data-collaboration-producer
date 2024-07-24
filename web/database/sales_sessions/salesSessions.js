import { pool } from '../connect.js'

export async function createSalesSession(orderId, reservationDate) {
    const result = await pool.query(`
      INSERT INTO sales_sessions (shopify_order_id, reservation_date) VALUES ($1, $2)
        RETURNING shopify_order_id, reservation_date;
    `,
        [orderId, reservationDate]
    );
    return result.rows;
}

export async function loadSalesSession(orderId) {
    const result = await pool.query(`
      SELECT shopify_order_id as "shopifyOrderId", reservation_date as "reservationDate" FROM sales_sessions where shopify_order_id = $1;`,
        [orderId]
    );
    return result.rows[0];
}
import {pool} from '../connect'
export const createLineItems = async (orderId, lineItems) => {
    const parameters = lineItems.map(line => ({ orderId, id: line.id }));
    try {
        const result = await pool.query(`
            INSERT INTO line_items (shopify_id, order_id)
            (SELECT *
            FROM json_to_recordset($1)
            AS x("id" bigint, "orderId" bigint))
            RETURNING *;
        `,

            [JSON.stringify(parameters)]
        );
        return result.rows;
    } catch (err) {
        throw new Error(err);
    }
};

export const getLineItems = async (orderId) => {
    return (await pool.query(`SELECT external_id as "externalId", shopify_id as "shopifyId" FROM line_items where order_id = $1`, [orderId])).rows;
};
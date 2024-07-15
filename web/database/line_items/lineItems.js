import { pool } from '../connect.js'

export const createOrUpdateLineItems = async (orderId, lineItems) => {
    const parameters = lineItems.map(line => ({ orderId, id: line.id, variantId: line.variantId }));
    const result = await pool.query(`
            INSERT INTO line_items (shopify_id, order_id, variant_id)
            (SELECT *
            FROM json_to_recordset($1)
            AS x("id" bigint, "orderId" bigint, "variantId" bigint))
            on CONFLICT(order_id, variant_id)
            DO UPDATE SET
               shopify_id = EXCLUDED.shopify_id 
            RETURNING *;
        `,

        [JSON.stringify(parameters)]
    );
    return result.rows;
};

export const getLineItems = async (orderId) => {
    return (await pool.query(`SELECT external_id as "externalId", shopify_id as "shopifyId", variant_id as "variantId" FROM line_items where order_id = $1`, [orderId])).rows;
};

export const getAllLineItems = async () => {
    const lineItems = (await pool.query(`SELECT order_id as "draftOrderId", external_id as "externalId", shopify_id as "shopifyId", variant_id as "variantId" FROM line_items order by order_id`, [])).rows;
    return lineItems.reduce((accumulator, lineItem) => {
        const [lastOrder, ...others] = accumulator
        if (lastOrder?.draftOrderId === lineItem.draftOrderId) {
            return [{draftOrderId: lineItem.draftOrderId, lineItems: {[lineItem.shopifyId]: lineItem.externalId, ...lastOrder.lineItems}}, ...others];
        } else {
            return [{draftOrderId: lineItem.draftOrderId, lineItems: {[lineItem.shopifyId]: lineItem.externalId}}, ...accumulator]
        }
    }, []).reverse();
}

export const getLineItemIdMappings = async (orderId) => {
    return (await getLineItems(orderId))
        .reduce((mappings, mapping) => ({ ...mappings, [mapping.shopifyId]: mapping.externalId }), {})
}
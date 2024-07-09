import {createLineItems, getLineItemIdMappings} from '../../../database/line_items/lineItems.js'

export async function persistLineIdMappings(shopifyDraftOrder) {

    const mappings = shopifyDraftOrder.lineItems.edges.map(({node: lineItem}) => ({
        id: lineItem.id,
        variantId: lineItem.variant.id
    }));

    await createLineItems(shopifyDraftOrder.id, mappings);
    return await getLineItemIdMappings(shopifyDraftOrder.id);
}

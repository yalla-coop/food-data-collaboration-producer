import {createOrUpdateLineItems, getLineItemIdMappings} from '../../../database/line_items/lineItems.js'

export async function persistLineIdMappings(shopifyDraftOrder) {

    const mappings = shopifyDraftOrder.lineItems.edges.map(({node: lineItem}) => ({
        id: numericPortion(lineItem.id),
        variantId: numericPortion(lineItem.variant.id)
    }));

    await createOrUpdateLineItems(shopifyDraftOrder.id, mappings);
    return await getLineItemIdMappings(shopifyDraftOrder.id);
}

function numericPortion(id) {
    return id.substring(id.lastIndexOf('/') + 1);
}
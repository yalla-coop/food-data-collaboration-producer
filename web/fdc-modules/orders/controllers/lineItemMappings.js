import { createOrUpdateLineItems, getLineItems } from '../../../database/line_items/lineItems.js'
import * as ids from '../controllers/shopify/ids.js'

export async function persistLineIdMappings(shopifyDraftOrder) {
    const draftOrderId = ids.extract(shopifyDraftOrder.id);

    const mappings = shopifyDraftOrder.lineItems
        .filter((lineItem) => !lineItem.custom)
        .map((lineItem) => ({
            id: ids.extract(lineItem.id),
            variantId: ids.extract(lineItem.variant.id)
        }));

    await createOrUpdateLineItems(draftOrderId, mappings);
    return await getLineItems(draftOrderId);
}
export function extract(shopifyId) {
    return shopifyId.substring(shopifyId.lastIndexOf('/') + 1);
}

export function variant(id) {
    return `gid://shopify/ProductVariant/${id}`
}

export function draftOrder(id){
    return `gid://shopify/DraftOrder/${id}`
}

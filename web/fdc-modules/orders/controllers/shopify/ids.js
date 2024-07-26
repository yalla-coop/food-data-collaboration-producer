export function extract(shopifyId) {
    return shopifyId.toString().substring(shopifyId.toString().lastIndexOf('/') + 1);
}

export function variant(id) {
    return `gid://shopify/ProductVariant/${id}`
}

export function draftOrder(id){
    return `gid://shopify/DraftOrder/${id}`
}

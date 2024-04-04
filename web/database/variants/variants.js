import { query } from '../connect.js';

async function getVariants() {
    return (await query(`SELECT * FROM fdc_variants order by product_id`)).rows
}

async function variantCount() {
    return Number((await query(`SELECT count(*) FROM fdc_variants`)).rows[0].count);
}

async function getPagedVariants(lastId, limit) {
    return (await query(`SELECT * FROM fdc_variants where product_id > $1 order by product_id limit $2`, [lastId, limit])).rows
}

function indexedByProductId(variants) {
    return variants.reduce((accumulator, row) => {
        const productId = row.productId;
        return {
            ...accumulator,
            [productId]: accumulator[productId] ? [...accumulator[productId], row] : [row]
        };
    }, {});
}

async function getAndAddVariantsToProducts(products) {
    return addVariantsToProducts(products, indexedByProductId(await getVariants()))
}

function addVariantsToProducts(products, variantsByProductId){
    return products.map(product => ({ ...product, fdcVariants: variantsByProductId[product.id] || [] }))
}

export {
    getVariants,
    getPagedVariants,
    indexedByProductId,
    variantCount,
    getAndAddVariantsToProducts,
    addVariantsToProducts
}
import { query } from '../connect.js';

async function getVariants() {
    return (await query(`SELECT * FROM fdc_variants`)).rows.reduce((accumulator, row) => {
        const productId = row.productId;
        return {
            ...accumulator,
            [productId]: accumulator[productId] ? [...accumulator[productId], row] : [row]
        };
    }, {});
}

async function addVariantsToProducts(products){
    const variants = await getVariants();
    return products.map(product => ({...product, fdcVariants: variants[product.id] || []}))
}

export {
    getVariants,
    addVariantsToProducts
}
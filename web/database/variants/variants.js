import { query } from '../connect.js';

async function getVariants() {
  return (await query(`SELECT * FROM fdc_variants order by product_id`)).rows;
}

async function getVariantsByProductId(productId) {
  return (
    await query(`SELECT * FROM fdc_variants where product_id = $1`, [productId])
  ).rows;
}

async function variantCount() {
  return Number(
    (await query(`SELECT count(*) FROM fdc_variants`)).rows[0].count
  );
}

async function toggleVariantMappingStatus(variantId) {
  return (await query(`UPDATE fdc_variants SET enabled = NOT enabled WHERE id = $1 RETURNING *`, [variantId]))?.rows[0];
}

async function getPagedVariants(lastId, limit) {
  return (
    await query(
      `SELECT * FROM fdc_variants where product_id > $1 order by product_id limit $2`,
      [lastId, limit]
    )
  ).rows;
}

function indexedByProductId(variants) {
  return variants.reduce((accumulator, row) => {
    const productId = row.productId;
    return {
      ...accumulator,
      [productId]: accumulator[productId]
        ? [...accumulator[productId], row]
        : [row]
    };
  }, {});
}

async function combineFdcProductsWithTheirFdcConfiguration(products) {
  return addFdcConfigurationToFdcProducts(
    products,
    indexedByProductId(await getVariants())
  );
}

function addFdcConfigurationToFdcProducts(products, variantsByProductId) {
  return products.flatMap((product) => {
    if (variantsByProductId[product.id]) {
      return [{
        ...product,
        fdcVariants: variantsByProductId[product.id] 
      }];
    } else {
      return [];
    }
  });
}

export {
  getVariants,
  getVariantsByProductId,
  getPagedVariants,
  indexedByProductId,
  variantCount,
  combineFdcProductsWithTheirFdcConfiguration,
  addFdcConfigurationToFdcProducts as addVariantsToProducts,
  toggleVariantMappingStatus
};

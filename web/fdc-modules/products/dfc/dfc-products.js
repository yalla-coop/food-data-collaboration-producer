import { exportSuppliedProducts } from '../../../connector/productUtils.js';
import { addVariantsToProducts } from '../../../database/variants/variants.js';

export async function createDFCProductsFromShopify(
  fdcProducts,
  mappedVariantsByProductId
) {
  try {
    const exportedDFCProducts = await exportSuppliedProducts(
      addVariantsToProducts(fdcProducts, mappedVariantsByProductId)
    );

    return exportedDFCProducts;
  } catch (error) {
    console.error('Unable to export products', error);
    throw new Error(error);
  }
}

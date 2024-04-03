import { exportSuppliedProducts } from '../../../connector/productUtils.js';
import shopify from '../../../shopify.js';
import { addVariantsToProducts } from '../../../database/variants/variants.js';
import { query } from '../../../database/connect.js';

const getProductsByIds = async (req, res) => {
  const { body } = req;
  const { ids } = body;
  const { shopifySession } = req;

  if (!ids) {
    return res.status(400).json({
      success: false,
      message: 'Missing ids array'
    });
  }
  const retailVariantIds = ids.split(',');

  if (retailVariantIds.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Empty ids array'
    });
  }

  if (retailVariantIds.length > 250) {
    return res.status(400).json({
      success: false,
      message: 'Maximum of 250 ids allowed'
    });
  }

  const parentIds = await parentProductIds(retailVariantIds);

  try {
    const products = await shopify.api.rest.Product.all({
      session: shopifySession,
      ids: parentIds.join(','),
      limit: 250
    });

    const exportedDFCProducts = await exportSuppliedProducts((await addVariantsToProducts(products)));

    return res.status(200).json({
      products: exportedDFCProducts,
      success: true,
      message: 'Products retrieved successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error retrieving products'
    });
  }
};

async function parentProductIds(retailVariantIds) {
  const sql = `SELECT product_id from fdc_variants where retail_variant_id = ANY ($1) `;
  const result = await query(sql, [retailVariantIds]);
  return result.rows.map(({ productId }) => productId);
}

export default getProductsByIds;

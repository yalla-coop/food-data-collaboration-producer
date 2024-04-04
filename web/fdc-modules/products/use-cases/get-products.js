/* eslint-disable no-param-reassign */
/* eslint-disable function-paren-newline */
/* eslint-disable camelcase */
import { exportSuppliedProducts } from '../../../connector/productUtils.js';
import shopify from '../../../shopify.js';
import {addVariantsToProducts, variantCount, getPagedVariants, indexedByProductId} from '../../../database/variants/variants.js';

const PAGE_SIZE = 250;

const getProducts = async ({
  session,
  sinceId = '0',
  remainingProductsCount = 0
}) => {
  try {

    const totalProducts = await variantCount();
    const variants = await getPagedVariants(sinceId, PAGE_SIZE);

    const mappedVariantsByProductId = indexedByProductId(variants);

    if (Object.keys(mappedVariantsByProductId).length === 0 ) {
      return {
        products: [],
        lastId: sinceId,
        remainingProductsCount: 0
      };
    }

    const shopifyProducts = await shopify.api.rest.Product.all({
      session,
      ids: Object.keys(mappedVariantsByProductId).join(','),
    });

    const fdcProducts = shopifyProducts.filter(({ tags }) => tags.includes('fdc'));

    const remainingProducts = (remainingProductsCount ? Number(remainingProductsCount) : totalProducts) - shopifyProducts.length;

    const lastId = variants[variants.length - 1]?.productId;

    const exportedDFCProducts = await exportSuppliedProducts(addVariantsToProducts(fdcProducts, mappedVariantsByProductId));

    return {
      products: exportedDFCProducts,
      lastId,
      remainingProductsCount: remainingProducts
    };
  } catch (err) {
    console.error("Unable to load products", err)
    throw new Error(err);
  }
};

export default getProducts;

/* eslint-disable no-param-reassign */
/* eslint-disable function-paren-newline */
/* eslint-disable camelcase */
import { exportSuppliedProducts } from '../../../connector/productUtils.js';
import shopify from '../../../shopify.js';
import {
  addVariantsToProducts,
  variantCount,
  getPagedVariants,
  indexedByProductId
} from '../../../database/variants/variants.js';
import { getShopifyIdSubstring } from '../../../database/utils/get-shopify-id-substring.js';
import config from '../../../config.js';

const PAGE_SIZE = 250;
const getProductsByIds = async (client, ids) => {
  const query = `
    query getProducts($ids: [ID!]!) {
      products: nodes(ids: $ids) {
        ... on Product {
          id
          tags
          title
          description
          images(first: 10) {
            edges {
              node {
                id
                src
              }
            }
          }
          variants(first: 250) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
  `;
  const response = await client.request(query, {
    variables: { ids: ids.map((id) => `gid://shopify/Product/${id}`) }
  });

  if (response.errors) {
    console.error('Failed to load Products', JSON.stringify(response.errors));
    throw new Error('Failed to load Products');
  }

  return response.data.products.map((product) => ({
    ...product,
    id: getShopifyIdSubstring(product.id),
    variants: product.variants.edges.map(({ node }) => ({
      ...node,
      id: getShopifyIdSubstring(node.id),
      images: product?.images?.edges.map((edge) => edge.node)
    }))
  }));
};

const getProducts = async ({
  session,
  sinceId = '0',
  remainingProductsCount = 0
}) => {
  try {
    const client = new shopify.api.clients.Graphql({ session });

    const totalProducts = await variantCount();

    const variants = await getPagedVariants(sinceId, PAGE_SIZE);

    const mappedVariantsByProductId = indexedByProductId(variants);

    if (Object.keys(mappedVariantsByProductId).length === 0) {
      return {
        products: [],
        lastId: sinceId,
        remainingProductsCount: 0
      };
    }

    const productIds = Object.keys(mappedVariantsByProductId);
    const shopifyProducts = await getProductsByIds(client, productIds);

    const fdcProducts = shopifyProducts.filter(({ tags }) =>
      tags.includes('fdc')
    );

    const remainingProducts =
      (remainingProductsCount
        ? Number(remainingProductsCount)
        : totalProducts) - shopifyProducts.length;

    const lastId = variants[variants.length - 1]?.productId;

    const exportedDFCProducts = await exportSuppliedProducts(
      addVariantsToProducts(fdcProducts, mappedVariantsByProductId),
      config.PRODUCER_SHOP_NAME
    );

    return {
      products: exportedDFCProducts,
      lastId,
      remainingProductsCount: remainingProducts
    };
  } catch (err) {
    console.error('Unable to load products', err);
    throw new Error(err);
  }
};

export default getProducts;

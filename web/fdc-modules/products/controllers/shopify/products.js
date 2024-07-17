import { getShopifyIdSubstring } from '../../../../database/utils/get-shopify-id-substring.js';
import {
  getVariants,
  getVariantsByProductId,
  indexedByProductId
} from '../../../../database/variants/variants.js';

export async function findFDCProducts(client, fdcVariantsFromDB) {
  const shopifyProducts = await findProductsByIds(client, fdcVariantsFromDB);
  const fdcProducts = shopifyProducts.filter(({ tags }) =>
    tags.includes('fdc')
  );

  return fdcProducts;
}

export async function getFdcVariantsFromDB() {
  const variants = await getVariants();
  const mappedVariantsByProductId = indexedByProductId(variants);

  return mappedVariantsByProductId;
}

export async function getFdcVariantsByProductIdFromDB(productId) {
  const variants = await getVariantsByProductId(productId);
  const mappedVariantsByProductId = indexedByProductId(variants);

  return mappedVariantsByProductId;
}

export async function findProductsByIds(client, ids) {
  const query = `
    query findProducts($ids: [ID!]!) {
      products: nodes(ids: $ids) {
        ... on Product {
          id
          tags
          title
          description
          bodyHtml
          descriptionHtml
          hasOnlyDefaultVariant
          vendor
          handle
          status
          images(first: 10) {
            edges {
              node {
                id
                altText
                src
              }
            }
          }
          variants(first: 250) {
            edges {
              node {
                id
                title
                price
                sku
                position
                inventoryPolicy
                taxable
                inventoryQuantity
                image {
                  id
                  altText
                  src
                }
              }
            }
          }
        }
      }
    }
  `;
  const response = await client.query({
    data: {
      query,
      variables: { ids: ids.map((id) => `gid://shopify/Product/${id}`) }
    }
  });

  if (response.errors) {
    console.error('Failed to load Products', JSON.stringify(response.errors));
    throw new Error('Failed to load Products');
  }

  return response.body.data.products.map((product) => {
    return {
      ...product,
      id: getShopifyIdSubstring(product.id),
      images: product?.images?.edges?.map((edge) => edge.node),
      variants: product.variants.edges.map(({ node }) => ({
        ...node,
        id: getShopifyIdSubstring(node.id)
      }))
    };
  });
}

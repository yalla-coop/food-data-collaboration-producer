import { getShopifyIdSubstring } from '../../../../database/utils/get-shopify-id-substring.js';
import {
  getVariants,
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

export async function findProductsByIds(client, ids) {
  const query = `
    query findProducts($ids: [ID!]!) {
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

  return response.body.data.products.map((product) => ({
    ...product,
    id: getShopifyIdSubstring(product.id),
    variants: product.variants.edges.map(({ node }) => ({
      ...node,
      id: getShopifyIdSubstring(node.id),
      images: product?.images?.edges.map((edge) => edge.node)
    }))
  }));
}

export async function findProductById(client, id) {
  const query = `
        query findProduct($id: ID!) {
            product: node(id: $id) {
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
  const response = await client.query({
    data: {
      query,
      variables: { id: `gid://shopify/Product/${id}` }
    }
  });

  if (response.errors) {
    console.error('Failed to load Product', JSON.stringify(response.errors));
    throw new Error('Failed to load Product');
  }

  return response.body.data.product;
}

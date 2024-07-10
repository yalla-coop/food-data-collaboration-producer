import shopify from '../../../shopify.js';
import { getAndAddVariantsToProducts } from '../../../database/variants/variants.js';
import { getShopifyIdSubstring } from '../../../database/utils/get-shopify-id-substring.js';

async function findProducts(client) {
  const response = await client.query({
    data: {
      query: `{
        products(first: 250) {
          edges {
            node {
              description
              handle
              id
              images(first: 250) {
                edges {
                  node {
                    src
                    id
                    url
                  }
                }
              }
              productType
              status
              title
              totalVariants
              tracksInventory
              totalInventory
              variants(first: 10) {
                edges {
                  node {
                    compareAtPrice
                    id
                    image {
                      altText
                      height
                      id
                      originalSrc
                      src
                      url
                    }
                    inventoryPolicy
                    inventoryQuantity
                    price
                    sku
                    taxable
                    title
                  }
                }
              }
              vendor
            }
          }
        }
      }`
    }
  });

  if (response.errors) {
    console.error('Failed to load Products', JSON.stringify(response.errors));
    throw new Error('Failed to load Products');
  }

  return response?.body?.data?.products?.edges.map(({ node: product }) => ({
    ...product,
    id: getShopifyIdSubstring(product.id),
    variants: product?.variants?.edges.map(({ node: variant }) => ({
      ...variant,
      id: getShopifyIdSubstring(variant.id)
    })),
    images: product?.images?.edges.map((edge) => edge.node)
  }));
}

const getProducts = async (req, res) => {
  try {
    const { shopifySession } = req;

    const client = new shopify.api.clients.Graphql({ session: shopifySession });

    const products = await findProducts(client);
    const productsWithVariants = await getAndAddVariantsToProducts(products);
    res.type('application/json');
    res.send({ products: productsWithVariants });
  } catch (error) {
    console.error(error);
    return res.status(404).send('Unable to find products');
  }
};

export default getProducts;

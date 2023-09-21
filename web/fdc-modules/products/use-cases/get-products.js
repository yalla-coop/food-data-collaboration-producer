/* eslint-disable no-param-reassign */
/* eslint-disable function-paren-newline */
/* eslint-disable camelcase */
import shopify from '../../../shopify.js';

const getProducts = async ({ session, sinceId }) => {
  try {
    const products = await shopify.api.rest.Product.all({
      session,
      limit: 250,
      since_id: sinceId
    });

    if (!products.length) {
      return {
        products: [],
        sinceId: null
      };
    }

    const lastId = products[products.length - 1].id;

    const fdcProducts = products.filter(({ tags }) => tags.includes('fdc'));

    const inventoryItems = await shopify.api.rest.InventoryItem.all({
      session,
      limit: 250,
      ids: fdcProducts
        .flatMap((p) => p.variants.map((v) => v.inventory_item_id))
        .join(',')
    });

    fdcProducts.forEach((product) => {
      product.variants.forEach((hv) => {
        const inventoryItem = inventoryItems.find(
          (i) => i.id === hv.inventory_item_id
        );

        hv.tracked = inventoryItem?.tracked || false;
      });
    });

    return {
      products: fdcProducts,
      lastId
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default getProducts;

/* eslint-disable no-param-reassign */
/* eslint-disable function-paren-newline */
/* eslint-disable camelcase */
import shopify from '../../../shopify.js';

// import { connector, createSuppliedProduct } from '../../../connector/index.js';
import { Connector } from '@datafoodconsortium/connector';
const connector = new Connector();

const getProducts = async ({
  session,
  sinceId = '0',
  remainingProductsCount = 0
}) => {
  try {
    const productsCountResult = await shopify.api.rest.Product.count({
      session
    });

    const { count: totalProductsCount } = productsCountResult;

    const products = await shopify.api.rest.Product.all({
      session,
      limit: 250,
      since_id: sinceId
    });

    let remainingProducts = 0;

    if (sinceId === '0') {
      remainingProducts = Number(totalProductsCount) - products.length;
    } else {
      remainingProducts = Math.abs(
        products.length - Number(remainingProductsCount)
      );
    }

    if (!products.length) {
      return {
        products: [],
        sinceId: null,
        remainingProductsCount: remainingProducts
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

    const testProduct = fdcProducts?.[0];

    const testId = JSON.stringify(testProduct.id);
    const dfcTestProductData = {
      semanticId: testId,
      description: testProduct.title,

      Name: testProduct.title

      // id: testId
    };

    // console.log('dfcTestProductData :>> ', dfcTestProductData);
    const dfcTestSuppliedProduct =
      connector.createSuppliedProduct(dfcTestProductData);

    const dfcTestProductExports = await connector.export([
      dfcTestSuppliedProduct
    ]);

    return {
      products: fdcProducts,
      lastId,
      remainingProductsCount: remainingProducts,
      dfcTestProductExports
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default getProducts;

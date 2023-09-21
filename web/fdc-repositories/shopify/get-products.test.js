/* eslint-disable no-undef */
import getProductsApiRest from './get-products.js';

describe('Get products', () => {
  it('should return products', async () => {
    const { products, lastId } = await getProductsApiRest({
      sinceId: 8141924991283,
      session: {
        id: 'offline_test-hodmedod.myshopify.com',
        shop: 'test-hodmedod.myshopify.com',
        state: 273622910773428,
        isOnline: false,
        accessToken: 'shpua_4d40dd87c36fff63cf61dc1a00f15a44',
        scope:
          'write_products,write_draft_orders,write_inventory,read_locations,write_customers,write_orders'
      }
    });

    expect(products).toBeDefined();
    expect(products.length).toBeGreaterThan(0);
    expect(lastId).toBeDefined();
  });
});

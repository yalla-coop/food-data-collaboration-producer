/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../../app';
import { completeCurrentShopifyOrder } from './complete-current-order';

describe('Complete current order', () => {
  it('should return 200', async () => {
    await request(app)
      .patch(
        '/fdc/orders/5478604702003/complete?shop=test-hodmedod.myshopify.com'
      )
      .expect((res) => {
        console.log(res.body);
      });
  });

  it('should be tested', async () => {
    await completeCurrentShopifyOrder({
      session: {
        id: 'offline_test-hodmedod.myshopify.com',
        shop: 'test-hodmedod.myshopify.com',
        state: 647608474950605,
        isOnline: false,
        accessToken: 'shpua_d5cdce8107e246150fb0f6e3f545c440',
        scope:
          'write_products,write_draft_orders,write_inventory,read_locations,write_customers,write_orders'
      },
      id: 5478604702003
    });
  });
});

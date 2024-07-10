/* eslint-disable no-undef */
import { createNewOrderBasedOnCurrentOrder } from './update-current-order';

describe('updateCurrentOrder', () => {
  it('should be tested', async () => {
    await createNewOrderBasedOnCurrentOrder({
      session: {
        id: 'offline_test-hodmedod.myshopify.com',
        shop: 'test-hodmedod.myshopify.com',
        state: 647608474950605,
        isOnline: false,
        accessToken: 'shpua_d5cdce8107e246150fb0f6e3f545c440',
        scope:
          'write_products,write_draft_orders,write_inventory,read_locations,write_customers,write_orders'
      },
      orderId: 5478380732723,
      lineItems: [
        {
          variant_id: 44525624557875,
          quantity: 10
        }
      ]
    });
  });
});

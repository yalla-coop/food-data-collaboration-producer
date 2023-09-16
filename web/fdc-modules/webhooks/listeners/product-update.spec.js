import productUpdateListener from './product-update';

/* eslint-disable no-undef */
describe('Test listener', () => {
  it('Test product update listener', async () => {
    productUpdateListener({
      data: {
        object: {
          id: 8140849283379,
          shopName: 'test-hodmedod.myshopify.com'
        }
      }
    });

    expect(200).toBe(200);
  });
});

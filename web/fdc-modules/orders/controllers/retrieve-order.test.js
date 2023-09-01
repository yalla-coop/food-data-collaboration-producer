/* eslint-disable object-curly-newline */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import request from 'supertest';
import nock from 'nock';
import app from '../../../app.js';

import { pool } from '../../../database/connect.js';
import initTestData from '../../../database/initTestData.js';
import insertSession from '../../../database/shopify_sessions/InsertSession.js';

describe('retrieve-order', () => {
  beforeAll(async () => {
    await initTestData();
    await insertSession({
      id: 'offline_installed-store.myshopify.com',
      shop: 'installed-store.myshopify.com',
      state: '123',
      accessToken: '123'
    });
  });

  afterAll(async () => {
    await pool.end();
  });

  test('should return no access token when the store does not have a value in the sessions sqlite db', async () => {
    await request(app)
      .post('/fdc/orders?shop=not-installed-store.myshopify.com')
      .send({
        order: {
          keycloakLesCommunsID: 454,
          orderStatus: 'open',
          customerName: 'hassan elnajjar',
          shippingAddress: 'address 1',
          phoneNumber: '+15142546017',
          emailAddress: 'hassan@example.com',
          billingAddress: 'address 2',
          lineItems: [
            {
              quantity: 1,
              variant_id: 789,
              inventory_item_id: 123,
              sku: '123'
            }
          ]
        }
      })
      .expect(500)
      .expect('Content-Type', /json/)

      .expect({
        success: false,
        message:
          'No access token found for store not-installed-store.myshopify.com'
      });
  });

  test('should return 200 when the store has a value in the sessions sqlite db - this test create an order for exiting customer', async () => {
    const shopName = 'installed-store.myshopify.com';
    const customerId = 54545184;
    const email = 'test@exmaple.com';
    const phone = '+15142546017';

    nockShopifyInventoryLevel(shopName);
    nockShopifyCustomerSearchForExitCustomer({
      shopName,
      email,
      phone,
      customerId
    });
    nockShopifyCreateOrder({
      shopName,
      customerId
    });

    await request(app)
      .post(`/fdc/orders?shop=${shopName}`)
      .send({
        order: {
          keycloakLesCommunsID: 454,
          orderStatus: 'open',
          customerName: 'hassan elnajjar',
          shippingAddress: 'address 1',
          phoneNumber: phone,
          emailAddress: email,
          billingAddress: 'address 2',
          lineItems: [
            {
              quantity: 1,
              variant_id: 789,
              inventory_item_id: 123,
              sku: '123'
            }
          ]
        }
      })
      .expect(200)
      .expect('Content-Type', /json/)

      .expect((res) => {
        expect(res.body).toEqual({
          success: true,
          message: 'Order retrieved successfully',
          createdOrder: {
            success: true,
            message: 'Draft order created successfully',
            order: {
              customer: {
                id: 54545184
              },
              id: 123,
              inventory_behaviour: 'decrement_obeying_policy',
              line_items: [
                {
                  id: 123,
                  inventory_item_id: 123,
                  quantity: 1,
                  sku: '100',
                  variant_id: 789
                }
              ],
              session: null,
              tags: 'FDC order'
            },
            availableLineItems: [
              {
                quantity: 1,
                variant_id: 789,
                inventory_item_id: 123,
                sku: '123'
              }
            ]
          }
        });
      });
  });

  test('should return 200 when the store has a value in the sessions sqlite db - this test create an order for new customer', async () => {
    const shopName = 'installed-store.myshopify.com';
    const email = 'new@example.com';
    const phone = '+15142546017';
    const customerId = 123;

    nockShopifyInventoryLevel(shopName);

    nockShopifyCustomerSearchForNotFoundCustomers({
      shopName,
      email,
      phone
    });

    nockShopifyCreateCustomer({
      shopName,
      email,
      phone,
      customerId
    });

    nockShopifyCreateOrder({
      shopName,
      customerId
    });

    await request(app)
      .post(`/fdc/orders?shop=${shopName}`)
      .send({
        order: {
          keycloakLesCommunsID: 454,
          orderStatus: 'open',
          customerName: 'hassan elnajjar',
          shippingAddress: 'address 1',
          phoneNumber: phone,
          emailAddress: email,
          billingAddress: 'address 2',
          lineItems: [
            {
              quantity: 1,
              variant_id: 789,
              inventory_item_id: 123,
              sku: '123'
            }
          ]
        }
      })
      .expect(200)
      .expect('Content-Type', /json/)

      .expect((res) => {
        expect(res.body).toEqual({
          success: true,
          message: 'Order retrieved successfully',
          createdOrder: {
            success: true,
            message: 'Draft order created successfully',
            order: {
              customer: {
                id: 123
              },
              id: 123,
              inventory_behaviour: 'decrement_obeying_policy',
              line_items: [
                {
                  id: 123,
                  inventory_item_id: 123,
                  quantity: 1,
                  sku: '100',
                  variant_id: 789
                }
              ],
              session: null,
              tags: 'FDC order'
            },
            availableLineItems: [
              {
                quantity: 1,
                variant_id: 789,
                inventory_item_id: 123,
                sku: '123'
              }
            ]
          }
        });
      });
  });

  test('should return 400 when the request body is invalid', async () => {
    await request(app)
      .post('/fdc/orders?shop=installed-store.myshopify.com')
      .send({
        order: {
          keycloakLesCommunsID: 454,
          orderStatus: 'open',
          customerName: 'hassan elnajjar',
          shippingAddress: 'address 1',
          phoneNumber: '+15142546017',
          emailAddress: 'hassan@example.com',
          billingAddress: 'address 2',
          lineItems: [
            {
              quantity: 1,
              inventory_item_id: 123,
              sku: '123'
            }
          ]
        }
      })
      .expect(500)
      .expect('Content-Type', /json/)

      .expect({
        success: false,
        message: 'lineItems[0].variant_id is a required field'
      });
  });
});

function nockShopifyInventoryLevel(shopName) {
  return nock(`https://${shopName}:443`, { encodedQueryParams: true })
    .get('/admin/api/2023-01/inventory_levels.json')
    .matchHeader('x-shopify-access-token', ['123'])
    .matchHeader('accept', ['*/*'])
    .matchHeader('accept-encoding', ['gzip,deflate'])
    .matchHeader('connection', ['close'])
    .matchHeader('host', `${shopName}`)
    .query({ inventory_item_ids: '123' })
    .reply(200, {
      inventory_levels: [
        {
          inventory_item_id: 123,
          location_id: 1,
          available: null
        }
      ]
    });
}

function nockShopifyCustomerSearchForExitCustomer({
  shopName,
  email,
  phone,
  customerId
}) {
  const encodedEmail = encodeURIComponent(email);
  const encodedPhone = encodeURIComponent(phone);

  return nock(`https://${shopName}:443`, {
    encodedQueryParams: true
  })
    .get('/admin/api/2023-01/customers/search.json')
    .matchHeader('x-shopify-access-token', ['123'])
    .matchHeader('accept', ['*/*'])
    .matchHeader('accept-encoding', ['gzip,deflate'])
    .matchHeader('connection', ['close'])
    .matchHeader('host', shopName)
    .query({
      query: `email%3A${encodedEmail}+OR+phone%3A${encodedPhone}`
    })
    .reply(200, {
      customers: [
        {
          id: customerId,
          email: '',
          phone: '+15142546017',
          tags: 'FDC customer',
          first_name: 'hassan',
          last_name: 'elnajjar'
        }
      ]
    });
}

function nockShopifyCustomerSearchForNotFoundCustomers({
  shopName,
  email,
  phone
}) {
  const encodedEmail = encodeURIComponent(email);
  const encodedPhone = encodeURIComponent(phone);

  return nock(`https://${shopName}:443`, {
    encodedQueryParams: true
  })
    .get('/admin/api/2023-01/customers/search.json')
    .matchHeader('x-shopify-access-token', ['123'])
    .matchHeader('accept', ['*/*'])
    .matchHeader('accept-encoding', ['gzip,deflate'])
    .matchHeader('connection', ['close'])
    .matchHeader('host', shopName)
    .query({
      query: `email%3A${encodedEmail}+OR+phone%3A${encodedPhone}`
    })
    .reply(200, {
      customers: []
    });
}

function nockShopifyCreateOrder({ shopName, customerId }) {
  return nock(`https://${shopName}:443`, {
    encodedQueryParams: true
  })
    .post('/admin/api/2023-01/orders.json', {
      order: {
        line_items: [
          {
            variant_id: 789,
            quantity: 1,
            inventory_item_id: 123,
            sku: '123'
          }
        ],
        inventory_behaviour: 'decrement_obeying_policy',
        tags: 'FDC order',
        customer: { id: customerId }
      }
    })
    .matchHeader('x-shopify-access-token', ['123'])
    .matchHeader('content-type', ['application/json'])
    .matchHeader('accept', ['*/*'])
    .matchHeader('accept-encoding', ['gzip,deflate'])
    .matchHeader('connection', ['close'])
    .matchHeader('host', shopName)
    .reply(201, {
      order: {
        id: 123,
        tags: 'FDC order',
        line_items: [
          {
            id: 123,
            variant_id: 789,
            quantity: 1,
            inventory_item_id: 123,
            sku: '100'
          }
        ]
      }
    });
}

function nockShopifyCreateCustomer({ shopName, email, phone, customerId }) {
  return nock(`https://${shopName}:443`, {
    encodedQueryParams: true
  })
    .post('/admin/api/2023-01/customers.json', {
      customer: {
        first_name: 'hassan elnajjar',
        last_name: '',
        email,
        phone,
        verified_email: true,
        tags: 'FDC customer'
      }
    })
    .matchHeader('x-shopify-access-token', ['123'])
    .matchHeader('content-type', ['application/json'])
    .matchHeader('accept', ['*/*'])
    .matchHeader('accept-encoding', ['gzip,deflate'])
    .matchHeader('connection', ['close'])
    .matchHeader('host', shopName)
    .reply(201, {
      customer: {
        id: customerId,
        email,
        phone,
        tags: 'FDC customer',
        first_name: 'hassan',
        last_name: 'elnajjar'
      }
    });
}

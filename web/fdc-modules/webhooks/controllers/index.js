import { DeliveryMethod } from '@shopify/shopify-api';
import { Router } from 'express';
import shopify from '../../../shopify.js';
import { webhookHandler } from '../listeners/product-update.js';

shopify.api.webhooks
  .addHandlers({
    PRODUCTS_UPDATE: [
      {
        deliveryMethod: DeliveryMethod.Http,
        callbackUrl: '/api/webhooks',
        callback: webhookHandler
      }
    ]
  })
  .then((result) => {
    console.log('result:', 'registered webhooks');
  })
  .catch((err) => {
    console.error('err', err);
  });

const webhooks = Router();

webhooks.post('/', async (req, res) => {
  console.log('webhooks', req.body);
  return res.sendStatus(200);
});

export default webhooks;

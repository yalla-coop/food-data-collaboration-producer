import { DeliveryMethod } from '@shopify/shopify-api';
import { Router } from 'express';
import shopify from '../../../shopify.js';
import { webhookHandler } from '../listeners/product-update.js';

shopify.api.webhooks.addHandlers({
  PRODUCTS_UPDATE: [
    {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: '/api/webhooks',
      callback: webhookHandler
    }
  ]
});

const webhooks = Router();

export default webhooks;

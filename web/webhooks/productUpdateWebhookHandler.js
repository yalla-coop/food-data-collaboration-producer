import { DeliveryMethod } from '@shopify/shopify-api';
import productUpdateWebhookCallback from './product-update.js';

const productUpdateWebhookHandler = {
  PRODUCTS_UPDATE: [
    {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: '/api/webhooks',
      callback: productUpdateWebhookCallback
    }
  ]
};

export default productUpdateWebhookHandler;

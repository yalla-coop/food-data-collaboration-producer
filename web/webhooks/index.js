import { DeliveryMethod } from '@shopify/shopify-api';

const GDPRWebhookHandlers = {
  CUSTOMERS_DATA_REQUEST: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: '/api/webhooks',
    callback: async (topic, shop, body, webhookId) => {
      const payload = JSON.parse(body);
      return {
        status: 200
      };
    }
  },
  CUSTOMERS_REDACT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: '/api/webhooks',
    callback: async (topic, shop, body, webhookId) => {
      const payload = JSON.parse(body);
      return {
        status: 200
      };
    }
  },
  SHOP_REDACT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: '/api/webhooks',
    callback: async (topic, shop, body, webhookId) => {
      const payload = JSON.parse(body);
      return {
        status: 200
      };
    }
  }
};

export default {
  ...GDPRWebhookHandlers
};

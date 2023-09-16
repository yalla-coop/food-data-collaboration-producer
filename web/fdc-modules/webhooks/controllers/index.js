import { DeliveryMethod } from '@shopify/shopify-api';
import { Router } from 'express';
import shopify from '../../../shopify.js';
import { webhookHandler } from '../listeners/product-update.js';

const subscribeToWebhook = async () => {
  try {
    const sessions = await shopify.config.sessionStorage.findSessionsByShop(
      'test-hodmedod.myshopify.com'
    );

    const session = sessions[0];

    const address =
      'https://food-data-collaboration-hub-82234d1e2fc5.herokuapp.com/api/webhooks';

    const topic = 'products/update';

    const webhook = new shopify.api.rest.Webhook({ session });
    webhook.address = address;
    webhook.topic = topic;
    await webhook.saveAndUpdate();

    console.log('webhook', webhook);
  } catch (err) {
    console.error('err', err);
  }
};

subscribeToWebhook();

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

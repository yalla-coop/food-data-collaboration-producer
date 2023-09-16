import { DeliveryMethod } from '@shopify/shopify-api';
import dotenv from 'dotenv';
import { Router } from 'express';
import shopify from '../../../shopify.js';
import { webhookHandler } from '../listeners/product-update.js';

dotenv.config();

const { HOST } = process.env;

const subscribeToWebhook = async () => {
  try {
    const sessions = await shopify.config.sessionStorage.findSessionsByShop(
      'test-hodmedod.myshopify.com'
    );

    const session = sessions[0];
    const address = `${HOST}/api/webhooks`;
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

webhooks.post('/', async (req, res) => {
  console.log('webhooks', req.body);
  return res.sendStatus(200);
});

export default webhooks;

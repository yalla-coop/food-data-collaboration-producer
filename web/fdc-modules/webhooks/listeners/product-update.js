import axios from 'axios';
import { query } from '../../../database/connect.js';

const productUpdateListener = async (product, webhookId, topic) => {
  try {
    if (!product.tags.includes('fdc')) {
      return {
        statusCode: 200
      };
    }

    const selectWebhookQuery = 'SELECT * from webhooks WHERE id = $1';
    const selectWebhookValues = [webhookId];

    const selectWebhookResult = await query(
      selectWebhookQuery,
      selectWebhookValues
    );

    const webhook = selectWebhookResult?.rows?.[0];

    if (webhook) {
      return 'Webhook already exists';
    }

    const sql = 'SELECT * from hub_stores_listeners';
    const result = await query(sql);
    const listeners = result.rows;
    const promises = listeners.map(async (listener) => {
      const { shop: listenerShop, listenerUrl } = listener;
      console.log('listenerUrl', listenerUrl);
      console.log('listenerShop', listenerShop);

      await axios.post(listenerUrl, {
        shopName: listenerShop,
        product
      });
    });

    await Promise.allSettled(promises);

    const insertWebhookQuery =
      'INSERT INTO webhooks (id, topic, data) VALUES ($1, $2, $3)';

    const insertWebhookValues = [webhookId, topic, product];

    await query(insertWebhookQuery, insertWebhookValues);

    console.log('webhook finished nicely :------');
    return {
      statusCode: 200
    };
  } catch (err) {
    console.error('Errrror', err);
    return {
      statusCode: 500
    };
  }
};

export const webhookHandler = (topic, shop, webhookRequestBody, webhookId) => {
  console.log('webhook handler fired :------');

  const product = JSON.parse(webhookRequestBody);
  productUpdateListener(product, webhookId, topic);

  if (!topic === 'PRODUCTS_UPDATE') {
    return 'Webhook not registered';
  }

  return {
    statusCode: 200
  };
};

export default productUpdateListener;

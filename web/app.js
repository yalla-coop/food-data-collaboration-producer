/* eslint-disable function-paren-newline */
// @ts-nocheck
import { join } from 'path';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';
import express from 'express';
import serveStatic from 'serve-static';
import cors from 'cors';
import apiRouters from './api-routers.js';
import fdcRouters from './fdc-modules/fdc-routers.js';
import shopify from './shopify.js';
import GDPRWebhookHandlers from './gdpr.js';
import addSessionShopToReqParams from './middleware/addSessionShopToReqParameters.js';
import subscribeToWebhook from './utils/subscribeToWebhook.js';

dotenv.config();

const errorMiddleware = (err, _req, res, _next) => {
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      // @ts-ignore
      message: err.message
    });
  }

  // @ts-ignore
  return res.status(500).json({
    message: err.message,
    stack: err.stack
  });
};

const STATIC_PATH =
  process.env.NODE_ENV === 'production'
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({
    webhookHandlers: GDPRWebhookHandlers
  })
);

app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  async (req, res, next) => {
    try {
      await subscribeToWebhook({
        session: res.locals.shopify.session,
        HOST: process.env.HOST,
        topic: 'products/update',
        shopify
      });
      return next();
    } catch (err) {
      return next(err);
    }
  },
  shopify.redirectToShopifyOrAppRoot()
);

app.use('/fdc', cors(), express.json(), fdcRouters, errorMiddleware);
app.use('/api/*', shopify.validateAuthenticatedSession());

app.use('/*', addSessionShopToReqParams);

app.use('/api', express.json(), apiRouters);

app.use(serveStatic(STATIC_PATH, { index: false }));

app.use('/*', shopify.ensureInstalledOnShop(), async (_req, res) =>
  res
    .status(200)
    .set('Content-Type', 'text/html')
    .send(readFileSync(join(STATIC_PATH, 'index.html')))
);

app.use(errorMiddleware);

export default app;

/**
 *
 * TODO:-
 * 1. Register the PRODUCTS_UPDATE webhook
 * 2. Link this webhook to the listener
 * 3. Create an endpoint to receive the access requests
 *    from the hub users and add their data like the listener url,
 *    shop name, etc to the database
 * 4. Register the PRODUCTS_UPDATE webhook on the hub side also and the PRODUCTS DELETE
 *  and based on them update the products table.
 *
 */

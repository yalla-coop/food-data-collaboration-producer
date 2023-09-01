/* eslint-disable function-paren-newline */
// @ts-nocheck
import { join } from 'path';
import { readFileSync } from 'fs';
import express from 'express';
import serveStatic from 'serve-static';
import init from './database/init.js';

import apiRouters from './api-routers.js';
import fdcRouters from './fdc-routers.js';
import shopify from './shopify.js';
import GDPRWebhookHandlers from './gdpr.js';
import addSessionShopToReqParams from './middleware/addSessionShopToReqParameters.js';

init();

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

app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);

app.use('/fdc', express.json(), fdcRouters, errorMiddleware);
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

app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({
    webhookHandlers: GDPRWebhookHandlers
  })
);

// add error handler

export default app;

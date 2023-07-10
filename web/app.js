// @ts-check
import {join} from 'path';
import {readFileSync} from 'fs';
import express from 'express';
import serveStatic from 'serve-static';
import apiRouters from './api-routers.js';
import fdcRouters from './fdc-routers.js';
import shopify from './shopify.js';
import GDPRWebhookHandlers from './gdpr.js';

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

app.use('/fdc', express.json(), fdcRouters);
app.use('/api/*', shopify.validateAuthenticatedSession());

app.use(express.json());
app.use('/api', apiRouters);

app.use('/*', shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set('Content-Type', 'text/html')
    .send(readFileSync(join(STATIC_PATH, 'index.html')));
});

app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({
    webhookHandlers: GDPRWebhookHandlers
  })
);

app.use(serveStatic(STATIC_PATH, {index: false}));

app.use((err, _req, res, _next) => {
  console.error(err);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }

  return res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

export default app;

import '@shopify/shopify-api/adapters/node';
import {} from '@shopify/shopify-api';
import { BillingInterval, LATEST_API_VERSION } from '@shopify/shopify-api';
import sqlite3 from 'sqlite3';

import Shopify from 'shopify-api-node';
import { shopifyApp } from '@shopify/shopify-app-express';
import { SQLiteSessionStorage } from '@shopify/shopify-app-session-storage-sqlite';
import { restResources } from '@shopify/shopify-api/rest/admin/2023-01';
import { config } from './config.js';
import { DB } from './db.js';

const DB_PATH =
  process.env.NODE_ENV === 'test'
    ? `${process.cwd()}/web/test-database.sqlite`
    : `${process.cwd()}/database.sqlite`;

const database = new sqlite3.Database(DB_PATH);

// Initialize SQLite DB
DB.db = database;
DB.init();

export const getShopifyApiNodeByShopNameAndAccessToken = ({
  shopName,
  accessToken
}) =>
  Shopify({
    shopName,
    accessToken
  });

const scopes = [
  'write_products',
  'read_products',
  'write_draft_orders',
  'read_inventory',
  'write_inventory',
  'read_locations',
  'write_customers',
  'write_orders',
  'read_orders'
];

const apiObject =
  process.env.NODE_ENV === 'test'
    ? {
        apiVersion: LATEST_API_VERSION,
        restResources,
        billing: undefined,
        accessToken: config.SHOPIFY_ACCESS_TOKEN,
        HOST: config.HOST,
        scopes
      }
    : {
        apiVersion: LATEST_API_VERSION,
        restResources,
        billing: undefined,
        accessToken: config.SHOPIFY_ACCESS_TOKEN,
        scopes
      };

const shopify = shopifyApp({
  api: apiObject,
  auth: {
    path: '/api/auth',
    callbackPath: '/api/auth/callback'
  },
  webhooks: {
    path: '/api/webhooks'
  },
  sessionStorage: new SQLiteSessionStorage(DB_PATH)
});

export default shopify;

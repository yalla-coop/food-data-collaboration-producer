/* eslint-disable no-useless-constructor */
/* eslint-disable indent */
import '@shopify/shopify-api/adapters/node';
import { LATEST_API_VERSION } from '@shopify/shopify-api';
import * as dotenv from 'dotenv';
import { shopifyApp } from '@shopify/shopify-app-express';
import { PostgreSQLSessionStorage } from '@shopify/shopify-app-session-storage-postgresql';
import { restResources } from '@shopify/shopify-api/rest/admin/2023-01';
import config from './config.js';

dotenv.config();
// First : change the SQLite db to PostgreSQL
// and create a local one for development
// and a test one for testing

const DB_PATH = process.env.DATABASE_URL;

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

class Postgres extends PostgreSQLSessionStorage {
  constructor(props) {
    super(props);
  }

  storeSession(session) {
    console.log('session', session);
    return super.storeSession(session);
  }

  loadSession(id) {
    console.log('id', id);
    return super.loadSession(id);
  }
}

const shopify = shopifyApp({
  api: apiObject,
  auth: {
    path: '/api/auth',
    callbackPath: '/api/auth/callback'
  },
  webhooks: {
    path: '/api/webhooks'
  },
  sessionStorage: new Postgres(DB_PATH, {
    sessionTableName: 'shopify_sessions'
  })
});

export default shopify;

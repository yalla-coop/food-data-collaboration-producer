/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import pg from 'pg';
import fs from 'fs';
import {
  toCamelCase,
  toParentChild,
  sanitizeCSVInjection
} from './utils/index.js';

import config from '../config.js';

const { Pool } = pg;

const connectionString = config.DATABASE_URL;

// eslint-disable-next-line prefer-regex-literals
const isInsertOrUpdateRegex = new RegExp(/(UPDATE(.|\n)*SET)|(INSERT INTO)/i);

if (!connectionString) {
  throw new Error('Environment variable DATABASE_URL must be set');
}

const pool = new Pool({
  max: 20,
  connectionString,
  ssl: { rejectUnauthorized: false, require: true }
});

// Do not use pool.query if you need transactional integrity
// check out a client from the pool to run several queries in a row in a transaction
// You must call the releaseCallback or client.release
// (which points to the releaseCallback) when you are finished with a client.
const getClient = async () => {
  const client = await pool.connect();
  const { query, release } = client;

  // monkey patch the query method to keep track of the last query executed
  const _query = (...args) => {
    client.lastQuery = args;
    return query.apply(client, args);
  };

  client.query = async (text, _params) => {
    let params = _params;
    const isInsertOrUpdate = isInsertOrUpdateRegex.test(text);

    if (isInsertOrUpdate) {
      params = sanitizeCSVInjection(_params);
    }

    const res = await _query(text, params);
    if (res && res.rows) {
      const rows = toCamelCase(res.rows);
      res.rows = rows;
    }
    return res;
  };

  // set a timeout of 5 seconds, after which we will log this client's last query
  const timeout = setTimeout(() => {
    console.log('A client has been checked out for more than 5 seconds!');
    console.log(
      `The last executed query on this client was: ${client.lastQuery}`
    );
  }, 5000);

  const done = (err2) => {
    // call the actual 'done' method, returning this client to the pool
    release(err2);
    // clear our timeout
    clearTimeout(timeout);
    // set the query method back to its old un-monkey-patched version
    client.query = query;
  };

  // set the release method back to its old un-monkey-patched version
  client.release = done;
  return client;
};

const query = async (text, _params, client) => {
  // eslint-disable-next-line no-underscore-dangle
  let _pool = pool;
  if (client) {
    _pool = client;
  }

  let params = _params;
  const isInsertOrUpdate = isInsertOrUpdateRegex.test(text);

  if (isInsertOrUpdate) {
    params = sanitizeCSVInjection(_params);
  }

  try {
    const res = await _pool.query(text, params);

    if (res && res.rows) {
      const rows = toCamelCase(toParentChild(res.rows));
      res.rows = rows;
    }
    return res;
  } catch (e) {
    console.log('Error from query fun', e, 'with query', text);
    throw new Error(e);
  }
};

const readSqlFile = async (filePath) => {
  const sql = fs.readFileSync(filePath).toString();
  await query(sql);
};

export { query, getClient, readSqlFile, pool };

import { join } from 'path';
import { readSqlFile as readSQLFileAndQuery } from './connect.js';
import deleteAllShopifySessionsData from './shopify_sessions/deleteAllShopifySessionsData.js';

const initTestData = async () => {
  await readSQLFileAndQuery(join(process.cwd(), '/web/database/build.sql'));
  await deleteAllShopifySessionsData();
};

export default initTestData;

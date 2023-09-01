import * as dotenv from 'dotenv';
import { join } from 'path';
import initTestData from './initTestData.js';
import { readSqlFile as readSQLFileAndQuery } from './connect.js';

dotenv.config();

const isTestEnv = process.env.NODE_ENV === 'test';

const init = async () => {
  if (isTestEnv) {
    await initTestData();
    return;
  }

  await readSQLFileAndQuery(join(process.cwd(), '/database/build.sql'));
};

export default init;

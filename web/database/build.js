import { readSqlFile } from './connect.js';
import config from '../config.js';

const buildProductTable = async () => {

    const connectionString = config.DATABASE_URL;
    console.log("Attempting to recreate database at:" + connectionString);

    if (connectionString.includes("amazonaws")) {
        throw new Error("You're rebuilding an environment, I'm not going to do that")
    }

    try {
        await readSqlFile(process.cwd() + '/web/database/auto-timestamp.sql');
        await readSqlFile(process.cwd() + '/web/database/build.sql');
        await readSqlFile(process.cwd() + '/web/database/webhooks/schema.sql');
        await readSqlFile(process.cwd() + '/web/database/users/schema.sql');
        await readSqlFile(process.cwd() + '/web/database/variants/schema.sql');
        await readSqlFile(process.cwd() + '/web/database/line_items/schema.sql');
        await readSqlFile(process.cwd() + '/web/database/orders/schema.sql');
        await readSqlFile(process.cwd() + '/web/database/users/test-users.sql');
    } catch (err) {
        throw new Error(err);
    }
};

buildProductTable();

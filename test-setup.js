import { pool } from "./web/database/connect";

beforeAll(async () => {
    await pool.query(`truncate table line_items restart identity`);
});

afterAll(async () => {
    await pool.end();
});
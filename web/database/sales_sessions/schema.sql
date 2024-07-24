BEGIN;
DROP TABLE IF EXISTS "sales_sessions" CASCADE;
CREATE TABLE IF NOT EXISTS "sales_sessions" (
    "id" SERIAL PRIMARY KEY,
    "shopify_order_id" bigint UNIQUE NOT NULL,
    "reservation_date" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp BEFORE
UPDATE ON "sales_sessions" FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
COMMIT;

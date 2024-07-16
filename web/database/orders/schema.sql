BEGIN;
DROP TABLE IF EXISTS "orders" CASCADE;
CREATE TABLE IF NOT EXISTS "orders" (
    "draft_order_id" bigint PRIMARY KEY,
    "completed_order_id" bigint NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp BEFORE
UPDATE ON "orders" FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
COMMIT;

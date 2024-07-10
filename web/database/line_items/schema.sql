BEGIN;
DROP TABLE IF EXISTS "line_items" CASCADE;
CREATE TABLE IF NOT EXISTS "line_items" (
    "external_id" SERIAL PRIMARY KEY,
    "shopify_id" bigint NOT NULL,
    "variant_id" bigint NOT NULL UNIQUE,
    "order_id" bigint NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp BEFORE
UPDATE ON "line_items" FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
COMMIT;

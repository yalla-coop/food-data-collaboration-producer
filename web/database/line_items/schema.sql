BEGIN;
DROP TABLE IF EXISTS "line_items" CASCADE;
CREATE TABLE IF NOT EXISTS "line_items" (
    "external_id" SERIAL PRIMARY KEY,
    "shopify_id" bigint NOT NULL,
    "variant_id" bigint NOT NULL,
    "order_id" bigint NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT order_id_variant_id UNIQUE (order_id, variant_id)
);
CREATE TRIGGER set_timestamp BEFORE
UPDATE ON "line_items" FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
COMMIT;

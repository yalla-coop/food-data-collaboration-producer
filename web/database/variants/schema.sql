BEGIN;
DROP TABLE IF EXISTS "variants" CASCADE;
CREATE TABLE IF NOT EXISTS "variants" (
    "id" SERIAL PRIMARY KEY,
    "producer_variant_id" TEXT NOT NULL,
    "hub_variant_id" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,
    "no_of_items_per_package" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp BEFORE
UPDATE ON "variants" FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
COMMIT;

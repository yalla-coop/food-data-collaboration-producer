BEGIN;
DROP TABLE IF EXISTS "fdc_variants" CASCADE;
CREATE TABLE IF NOT EXISTS "fdc_variants" (
    "id" SERIAL PRIMARY KEY,
    "wholesale_variant_id" bigint,
    "retail_variant_id" bigint NOT NULL,
    "product_id" bigint NOT NULL,
    "no_of_items_per_package" INTEGER,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp BEFORE
UPDATE ON "fdc_variants" FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
COMMIT;

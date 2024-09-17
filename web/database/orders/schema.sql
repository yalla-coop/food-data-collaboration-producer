BEGIN;
DROP TABLE IF EXISTS "orders" CASCADE;
CREATE TABLE IF NOT EXISTS "orders" (
    "draft_order_id" bigint PRIMARY KEY,
    "completed_order_id" bigint NULL,
    "owner_id" integer NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_user
      FOREIGN KEY(owner_id) 
        REFERENCES users(id)
);
CREATE TRIGGER set_timestamp BEFORE
UPDATE ON "orders" FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
COMMIT;

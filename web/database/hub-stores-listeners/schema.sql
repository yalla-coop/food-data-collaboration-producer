BEGIN;
DROP TABLE IF EXISTS hub_stores_listeners;
CREATE TABLE IF NOT EXISTS hub_stores_listeners (
  "id" SERIAL PRIMARY KEY,
  shop TEXT,
  listener_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "hub_stores_listeners"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

COMMIT;



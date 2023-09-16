BEGIN;
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
 "id" SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  shop TEXT,
  name TEXT,
  status BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "hub_stores_listeners"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

COMMIT;
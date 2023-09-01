BEGIN;

CREATE TABLE IF NOT EXISTS shopify_sessions (
  id TEXT PRIMARY KEY,
  shop TEXT NOT NULL,
  state INTEGER NOT NULL,
  is_online INTEGER NOT NULL DEFAULT 0,
  access_token TEXT NOT NULL,
  online_access_info TEXT,
  scope TEXT,
  expires INTEGER
);

COMMIT;
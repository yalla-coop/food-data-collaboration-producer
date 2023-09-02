BEGIN;

CREATE TABLE IF NOT EXISTS shopify_sessions (
  id TEXT PRIMARY KEY,
  shop TEXT NOT NULL,
  state TEXT NOT NULL,
  "isOnline" BOOLEAN NOT NULL DEFAULT FALSE,
  "accessToken" TEXT NOT NULL,
  "onlineAccessInfo" TEXT,
  scope TEXT,
  expires INTEGER
);

COMMIT;
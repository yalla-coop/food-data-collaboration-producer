Overview of various Database tables and their purpose:

**1. Users**
This table manages authenticated user sessions that have access to the producer's system (users need to be authenticated via OIDC as a first step to access the producer app)

**2. Sales Sessions**
This table is used to store orders and their associated reservation dates (used to reserve draft order stock on Shopify). The reservation date equals the end dates of a sales session.

**3. Orders**
This table maps draft order IDs to completed order IDs, linking orders through different stages of processing.

**4. Line Items**
This table maintains a stable ID for line items using an external ID provided via the app's API. This helps track and manage line items even if Shopify updates its internal IDs which is the default behaviour when updating ongoing orders.

**5. FDC Variants**
This table tracks products tagged as FDC, making them accessible to Hubs.

**6. Webhooks:**
Every time Shopify triggers a webhook, a record is created in this table. It logs the webhook event and its associated details.

**8. Shopify Sessions:**
This table manages user sessions created and handled by Shopify, including session tokens and expiration details.




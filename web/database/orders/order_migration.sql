ALTER TABLE orders ADD "owner_id" integer NOT NULL; 

ALTER TABLE orders 
ADD CONSTRAINT fk_user 
FOREIGN KEY (owner_id) 
REFERENCES users (id);
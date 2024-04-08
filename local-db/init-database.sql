CREATE USER fdc_appuser WITH PASSWORD 'fdc_appuser' ;

CREATE DATABASE fdc_hub;
GRANT ALL PRIVILEGES ON DATABASE fdc_hub TO fdc_appuser;
ALTER DATABASE fdc_hub OWNER TO fdc_appuser;

CREATE DATABASE fdc_producer;
GRANT ALL PRIVILEGES ON DATABASE fdc_producer TO fdc_appuser;
ALTER DATABASE fdc_producer OWNER TO fdc_appuser;

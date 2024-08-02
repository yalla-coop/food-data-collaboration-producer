import * as dotenv from 'dotenv';
import path from 'path';
import * as yup from 'yup';

const envDir = process.cwd().endsWith('/web') ? process.cwd() : path.join(process.cwd(), '/web');

dotenv.config({ path: path.join(envDir, '.env') });

const schema = yup.object().shape({
  SHOPIFY_API_KEY: yup.string(),
  DATABASE_URL: yup.string(),
  SHOPIFY_API_SECRET_KEY: yup.string(),
  OIDC_CLIENT_ID: yup.string(),
  OIDC_CLIENT_SECRET: yup.string(),
  HOST: yup.string(),
  PRODUCER_SHOP_URL: yup.string(),
  PRODUCER_SHOP_NAME: yup.string(),
  NODE_ENV: yup.string(),
});


const createConfig = () => {
  let envVars;
  try {
    envVars = schema.validateSync(process.env, { stripUnknown: false });
  } catch (error) {
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
  }

  return {
    DATABASE_URL: envVars.DATABASE_URL,
    SHOPIFY_API_KEY: envVars.SHOPIFY_API_KEY,
    SHOPIFY_API_SECRET_KEY: envVars.SHOPIFY_API_SECRET_KEY,
    HOST: envVars.HOST,
    OIDC_CLIENT_ID: envVars.OIDC_CLIENT_ID,
    OIDC_CLIENT_SECRET: envVars.OIDC_CLIENT_SECRET,
    PRODUCER_SHOP_URL: envVars.PRODUCER_SHOP_URL,
    PRODUCER_SHOP_NAME: envVars.PRODUCER_SHOP_NAME,
    NODE_ENV: envVars.NODE_ENV,
  };
};

export default createConfig();

import * as dotenv from 'dotenv';
import path from 'path';
import * as yup from 'yup';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const schema = yup.object().shape({
  SHOPIFY_API_KEY: yup.string(),
  DATABASE_URL: yup.string(),
  SHOPIFY_API_SECRET_KEY: yup.string(),
  SHOPIFY_ACCESS_TOKEN: yup.string(),
  OIDC_CLIENT_ID: yup.string(),
  OIDC_CLIENT_SECRET: yup.string(),
  HOST: yup.string(),
  PRODUCER_SHOP_URL: yup.string(),
  PRODUCER_SHOP_NAME: yup.string()
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
    SHOPIFY_ACCESS_TOKEN: envVars.SHOPIFY_ACCESS_TOKEN,
    HOST: envVars.HOST,
    OIDC_CLIENT_ID: envVars.OIDC_CLIENT_ID,
    OIDC_CLIENT_SECRET: envVars.OIDC_CLIENT_SECRET,
    PRODUCER_SHOP_URL: envVars.PRODUCER_SHOP_URL,
    PRODUCER_SHOP_NAME: envVars.PRODUCER_SHOP_NAME
  };
};

export default createConfig();

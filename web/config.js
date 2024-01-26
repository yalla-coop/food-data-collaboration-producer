import * as dotenv from 'dotenv';
import path from 'path';
import * as yup from 'yup';

const envFile = ['development', 'test'].includes(process.env.NODE_ENV)
  ? '.env.test'
  : '.env';

dotenv.config({ path: path.join(process.cwd(), envFile) });

const schema = yup.object().shape({
  SHOPIFY_API_KEY: yup.string(),
  DATABASE_URL: yup.string(),
  SHOPIFY_API_SECRET_KEY: yup.string(),
  SHOPIFY_ACCESS_TOKEN: yup.string(),
  OIDC_CLIENT_ID: yup.string(),
  OIDC_CLIENT_SECRET: yup.string(),
  HOST: yup.string()
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
    OIDC_CLIENT_SECRET: envVars.OIDC_CLIENT_SECRET
  };
};

export default createConfig();

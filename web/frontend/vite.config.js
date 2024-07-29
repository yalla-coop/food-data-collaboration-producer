import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'
import { join } from 'path';

dotenv.config({ path: join(process.cwd(), '../.env') });

if (
  process.env.npm_lifecycle_event === 'build' &&
  !process.env.CI &&
  !process.env.SHOPIFY_API_KEY
) {
  console.warn(
    '\nBuilding the frontend app without an API key. The frontend build will not run without an API key. Set the SHOPIFY_API_KEY environment variable when running the build command.\n'
  );
}

const proxyOptions = {
  target: `http://127.0.0.1:${process.env.BACKEND_PORT}`,
  changeOrigin: false,
  secure: true,
  ws: false
};

const host = process.env.HOST
  ? process.env.HOST.replace(/https?:\/\//, '')
  : 'localhost';

let hmrConfig;
if (host === 'localhost') {
  hmrConfig = {
    protocol: 'ws',
    host: 'localhost',
    port: 64999,
    clientPort: 64999
  };
} else {
  hmrConfig = {
    protocol: 'wss',
    host,
    port: process.env.FRONTEND_PORT,
    clientPort: 443
  };
}

export default defineConfig({
  root: dirname(fileURLToPath(import.meta.url)),
  plugins: [react()],
  define: {
    'process.env.SHOPIFY_API_KEY': JSON.stringify(process.env.SHOPIFY_API_KEY),
    'process.env.VARIANT_MAPPINGS': JSON.stringify(process.env.VARIANT_MAPPINGS)
  },
  resolve: {
    preserveSymlinks: true
  },
  server: {
    host: 'localhost',
    port: process.env.FRONTEND_PORT,
    hmr: hmrConfig,
    proxy: {
      '^/(\\?.*)?$': proxyOptions,
      '^/api(/|(\\?.*)?$)': proxyOptions,
      '^/fdc(/|(\\?.*)?$)': proxyOptions,
      '^/ofn(/|(\\?.*)?$)': proxyOptions,
      '^/oidc(/|(\\?.*)?$)': proxyOptions,
      '^/auth(/|(\\?.*)?$)': proxyOptions
    }
  }
});

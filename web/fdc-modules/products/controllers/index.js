import { Router } from 'express';
import getProducts from './get-products.js';

import checkUserAccessPermissions from '../../../middleware/checkUserAccessPermissions.js';

import checkOfflineSession from '../../../middleware/checkOfflineSession.js';

const products = Router();

products.post(
  '/',
  checkOfflineSession,
  checkUserAccessPermissions,
  getProducts
);

export default products;

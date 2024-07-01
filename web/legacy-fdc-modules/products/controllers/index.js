import { Router } from 'express';
import getProducts from './get-products.js';
import getProductsByIds from './get-products-by-ids.js';
import checkOfflineSession from '../../../middleware/checkOfflineSession.js';

const products = Router();

products.post(
  '/',
  checkOfflineSession,
  getProducts
);

products.post('/all', checkOfflineSession, getProductsByIds);

export default products;

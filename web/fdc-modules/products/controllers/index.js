import { Router } from 'express';
import getProducts from './get-products.js';

import checkOfflineSession from '../../../middleware/checkOfflineSession.js';

const products = Router();

products.get('/', checkOfflineSession, getProducts);

export default products;

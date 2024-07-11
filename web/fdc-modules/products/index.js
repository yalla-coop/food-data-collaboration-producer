import { Router } from 'express';
import getProducts from './controllers/get-products.js';

const fdcProductRoutes = Router({ mergeParams: true });

fdcProductRoutes.get('/', getProducts);

export default fdcProductRoutes;

import { Router } from 'express';
import getProducts from './controllers/get-products.js';

const fdcOrderRoutes = Router();

fdcOrderRoutes.get('/', getProducts);

export default fdcOrderRoutes;

import { Router } from 'express';
import getProducts from './controllers/get-products.js';
import getProduct from './controllers/get-product.js';

const fdcProductRoutes = Router({ mergeParams: true });

fdcProductRoutes.get('/', getProducts);
fdcProductRoutes.get('/:ProductId', getProduct);

export default fdcProductRoutes;

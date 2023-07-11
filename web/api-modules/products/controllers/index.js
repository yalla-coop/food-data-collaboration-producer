import { Router } from 'express';
import getProducts from './get-products.js';
import editProductById from './edit-product-by-id.js';

const products = Router();

products.get('/', getProducts);
products.patch('/:id', editProductById);

export default products;

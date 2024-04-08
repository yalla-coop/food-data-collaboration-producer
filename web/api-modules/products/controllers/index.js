import { Router } from 'express';
import getProducts from './get-products.js';
import editProductById from './edit-product-by-id.js';
import updateFdcVariantMappings from './update-fdc-variant-mappings.js';

const products = Router();

products.get('/', getProducts);
products.patch('/:id', editProductById);
products.post('/:id/fdcVariantMappings', updateFdcVariantMappings);

export default products;

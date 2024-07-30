import { Router } from 'express';
import getProducts from './get-products.js';
import toggleFdcStatus from './toggle-fdc-status.js';
import updateFdcVariantMappings from './update-fdc-variant-mappings.js';

const products = Router();

products.get('/', getProducts);
products.post('/:id/variant/:variantId/toggleFdcStatus', toggleFdcStatus);
products.post('/:id/fdcVariantMappings', updateFdcVariantMappings);

export default products;

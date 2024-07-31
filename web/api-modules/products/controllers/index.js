import { Router } from 'express';
import getProducts from './get-products.js';
import toggleFdcVariantStatus from './toggle-fdc-variant-status.js';
import addFdcVariant from './add-fdc-variant.js';
import updateFdcVariant from './update-fdc-variant.js';
import deleteFdcVariant from './delete-fdc-variant.js';

const products = Router();

products.get('/', getProducts);
products.post('/:id/variant/:variantId/toggleFdcStatus', toggleFdcVariantStatus);
products.put('/:id/variant', addFdcVariant);
products.post('/:id/variant/:variantId', updateFdcVariant);
products.delete('/:id/variant/:variantId', deleteFdcVariant);

export default products;

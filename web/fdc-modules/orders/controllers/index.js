import { Router } from 'express';

import createBaseOrder from './create-base-order.js';
import updateCurrentOrder from './update-current-order.js';
import completedCurrentOrder from './complete-current-order.js';

const orders = Router();

orders.post('/', createBaseOrder);
orders.patch('/:id', updateCurrentOrder);
orders.patch('/:id/complete', completedCurrentOrder);

export default orders;

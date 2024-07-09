import { Router } from 'express';

import create from './controllers/create-order'
import update from './controllers/update-order'
import get from './controllers/get-order'
import getOrderLines from './controllers/get-order-lines'
import createOrderLine from './controllers/create-order-line'
import getOrderLine from './controllers/get-order-line'

const fdcOrderRoutes = Router();

const implementMe = (req, res, next) => res.status(501).send('Not implemented yet!');

fdcOrderRoutes.get('/', implementMe);
fdcOrderRoutes.post('/', create);
fdcOrderRoutes.get('/:id', get);
fdcOrderRoutes.put('/:id', update);
fdcOrderRoutes.get('/:id/orderLines', getOrderLines);
fdcOrderRoutes.post('/:id/orderLines', createOrderLine);
fdcOrderRoutes.get('/:id/orderLines/:lineId', getOrderLine);

export default fdcOrderRoutes;
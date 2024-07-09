import { Router } from 'express';

import create from './controllers/create-order'
import update from './controllers/update-order'
import get from './controllers/get-order'
import getOrderLines from './controllers/get-order-lines'
import createOrUpdateOrderLine from './controllers/create-or-update-order-line'
import getOrderLine from './controllers/get-order-line'

const fdcOrderRoutes = Router();

const implementMe = (req, res, next) => res.status(501).send('Not implemented yet!');

fdcOrderRoutes.get('/', implementMe);
fdcOrderRoutes.post('/', create);
fdcOrderRoutes.get('/:id', get);
fdcOrderRoutes.put('/:id', update);
fdcOrderRoutes.get('/:id/orderLines', getOrderLines);
fdcOrderRoutes.post('/:id/orderLines', createOrUpdateOrderLine);
fdcOrderRoutes.get('/:id/orderLines/:lineId', getOrderLine);
fdcOrderRoutes.put('/:id/orderLines/:lineId', createOrUpdateOrderLine);

export default fdcOrderRoutes;
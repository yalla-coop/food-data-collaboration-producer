import { Router } from 'express';

import create from './controllers/create-order'
import update from './controllers/update-order'
import get from './controllers/get-order'

const fdcOrderRoutes = Router();

const implementMe = (req, res, next) => res.status(501).send('Not implemented yet!');

fdcOrderRoutes.get('/', implementMe);
fdcOrderRoutes.post('/', create);
fdcOrderRoutes.get('/:id', get);
fdcOrderRoutes.put('/:id', update);

export default fdcOrderRoutes;
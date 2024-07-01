import { Router } from 'express';

const fdcOrderRoutes = Router();

const implementMe = (req, res, next) => res.status(501).send('Not implemented yet!');

fdcOrderRoutes.get('/', implementMe);
fdcOrderRoutes.post('/', implementMe);
fdcOrderRoutes.get('/:id', implementMe);
fdcOrderRoutes.puty('/:id', implementMe);

export default fdcOrderRoutes;
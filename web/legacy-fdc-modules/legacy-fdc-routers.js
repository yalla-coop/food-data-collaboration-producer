import { Router } from 'express';

import OrdersModules from './legacy-orders/index.js';
import ProductsModules from './products/index.js';
import UsersModules from './users/index.js';

import checkUserAccessPermissions from '../middleware/checkUserAccessPermissions.js'

const legacyfdcRouter = Router();

legacyfdcRouter.use('/orders', checkUserAccessPermissions, OrdersModules.Controllers);
legacyfdcRouter.use('/products', checkUserAccessPermissions, ProductsModules.Controllers);
legacyfdcRouter.use('/hub-users', UsersModules.Controllers);

export default legacyfdcRouter;

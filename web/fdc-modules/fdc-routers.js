import { Router } from 'express';

import OrdersModules from './orders/index.js';
import ProductsModules from './products/index.js';
import UsersModules from './users/index.js';

import checkUserAccessPermissions from '../middleware/checkUserAccessPermissions.js'

const fdcRouter = Router();

fdcRouter.use('/orders', checkUserAccessPermissions, OrdersModules.Controllers);
fdcRouter.use('/products', checkUserAccessPermissions, ProductsModules.Controllers);
fdcRouter.use('/hub-users', UsersModules.Controllers);

export default fdcRouter;

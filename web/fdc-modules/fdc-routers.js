import { Router } from 'express';

import OrdersModules from './orders/index.js';
import ProductsModules from './products/index.js';
import UsersModules from './users/index.js';

const fdcRouter = Router();

fdcRouter.use('/orders', OrdersModules.Controllers);
fdcRouter.use('/products', ProductsModules.Controllers);
fdcRouter.use('/hub-users', UsersModules.Controllers);

export default fdcRouter;

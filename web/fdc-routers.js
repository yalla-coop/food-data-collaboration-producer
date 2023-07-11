import {Router} from 'express';

import OrdersModules from './fdc-modules/orders/index.js';
import ProductsModules from './fdc-modules/products/index.js';

const fdcRouter = Router();

fdcRouter.use('/orders', OrdersModules.Controllers);
fdcRouter.use('/products', ProductsModules.Controllers);

export default fdcRouter;

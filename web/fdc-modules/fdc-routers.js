import { Router } from 'express';

import OrdersModules from './orders/index.js';
import ProductsModules from './products/index.js';
import WebhooksModules from './webhooks/index.js';

const fdcRouter = Router();

fdcRouter.use('/orders', OrdersModules.Controllers);
fdcRouter.use('/products', ProductsModules.Controllers);
fdcRouter.use('/webhooks', WebhooksModules.Controllers);

export default fdcRouter;

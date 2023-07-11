import { Router } from 'express';

import checkOnlineSession from './middleware/checkOnlineSession.js';
import ProductsModules from './api-modules/products/index.js';

const apiRouter = Router();

apiRouter.use('/products', checkOnlineSession, ProductsModules.Controllers);

export default apiRouter;

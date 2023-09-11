import { Router } from 'express';

import checkOnlineSession from './middleware/checkOnlineSession.js';
import ProductsModules from './api-modules/products/index.js';
import UsersModules from './api-modules/users/index.js';

const apiRouter = Router();

apiRouter.use('/products', checkOnlineSession, ProductsModules.Controllers);

apiRouter.use('/hub-users', checkOnlineSession, UsersModules.Controllers);

export default apiRouter;

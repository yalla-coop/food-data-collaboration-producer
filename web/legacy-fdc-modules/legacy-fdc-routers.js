import { Router } from 'express';

import ProductsModules from './products/index.js';
import UsersModules from './users/index.js';

import checkUserAccessPermissions from '../middleware/checkUserAccessPermissions.js'

const legacyfdcRouter = Router();

legacyfdcRouter.use('/products', checkUserAccessPermissions, ProductsModules.Controllers);
legacyfdcRouter.use('/hub-users', UsersModules.Controllers);

export default legacyfdcRouter;

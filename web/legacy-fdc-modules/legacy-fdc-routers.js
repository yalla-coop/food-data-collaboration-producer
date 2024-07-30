import { Router } from 'express';

import UsersModules from './users/index.js';

const legacyfdcRouter = Router();

legacyfdcRouter.use('/hub-users', UsersModules.Controllers);

export default legacyfdcRouter;

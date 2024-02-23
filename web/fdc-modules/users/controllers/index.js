import { Router } from 'express';

import checkOfflineSession from '../../../middleware/checkOfflineSession.js';
import editUserShopById from './update-user.js';

const users = Router();

users.post('/:id', checkOfflineSession, editUserShopById);

export default users;

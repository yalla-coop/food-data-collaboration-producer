import { Router } from 'express';
import getUsers from './get-users.js';
import editUserStatusById from './edit-user-status-by-id.js';

const users = Router();

users.get('/', getUsers);
users.patch('/:id', editUserStatusById);

export default users;

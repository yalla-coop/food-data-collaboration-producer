import { Router } from 'express';
import getUsers from './get-users.js';
import editUserStatusById from './edit-user-status-by-id.js';
import deleteUser from './delete-user.js';

const users = Router();

users.get('/', getUsers);
users.patch('/:id', editUserStatusById);
users.delete('/:id', deleteUser);

export default users;

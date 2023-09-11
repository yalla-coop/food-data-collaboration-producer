import { query } from '../../../database/connect.js';

const getUsers = async (req, res, next) => {
  try {
    const users = await query('SELECT * FROM users');
    return res.json({
      users: users.rows
    });
  } catch (err) {
    return next(err);
  }
};

export default getUsers;

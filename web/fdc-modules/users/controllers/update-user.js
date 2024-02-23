import { query } from '../../../database/connect.js';

const editUserShopById = async (req, res, next) => {
  const { userId, hubShop } = req.body;

  if (!userId || !hubShop) {
    return res.status(400).json({
      message: 'UserName / Shop not provided',
      error: 'No userName / Shop provided'
    });
  }

  try {
    await query('UPDATE users SET shop = $1 WHERE user_id = $2', [
      hubShop, userId
    ]);

    return res.status(200).json({
      message: 'User shop updated successfully',
      success: true
    });
  } catch (err) {
    return next(err);
  }
};

export default editUserShopById;

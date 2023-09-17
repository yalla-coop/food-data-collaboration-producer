import { Issuer } from 'openid-client';
import { query } from '../database/connect.js';

const clientId = process.env.OIDC_CLIENT_ID;
const clientSecret = process.env.OIDC_CLIENT_SECRET;
const issuerURL = process.env.OIDC_ISSUER;

const checkUserAccessPermissions = async (req, res, next) => {
  const {
    userId,
    accessToken,
    shop: hubShopName = '',
    listenerUrl = ''
  } = req.body;

  console.log('req.body--- from check user access permission :::', req.body);

  if (!userId) {
    return res.status(403).json({
      message: 'User access denied',
      error: 'No user id provided'
    });
  }

  const issuer = await Issuer.discover(issuerURL);

  const client = new issuer.Client({
    client_id: clientId,
    client_secret: clientSecret
  });

  const tokenSet = await client.introspect(accessToken);

  if (!tokenSet.active) {
    return res.status(403).json({
      message: 'User access denied',
      error: 'User not authorized'
    });
  }

  const userName = tokenSet.name;

  try {
    const user = await query('SELECT * FROM users WHERE user_id = $1', [
      userId
    ]);

    if (!user || user.rows.length === 0) {
      // insert this user into the database with status false
      await query(
        'INSERT INTO users (user_id, status, name, shop, listener_url) VALUES ($1,$2,$3,$4,$5)',
        [userId, false, userName, hubShopName, listenerUrl]
      );

      return res.status(403).json({
        message: 'User access denied',
        error: 'User not found in database'
      });
    }

    const { status } = user.rows[0];

    if (status === true) {
      return next();
    }

    return res.status(403).json({
      message: 'User access denied',
      error: 'User not authorized'
    });
  } catch (err) {
    return res.status(500).json({
      message: 'User access denied',
      error: err.message
    });
  }
};

export default checkUserAccessPermissions;

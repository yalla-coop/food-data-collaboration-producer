import { Issuer } from 'openid-client';
import { query } from '../database/connect.js';

const clientId = process.env.OIDC_CLIENT_ID;
const clientSecret = process.env.OIDC_CLIENT_SECRET;
const issuerURL = process.env.OIDC_ISSUER;

const API_KEY = process.env.PRODUCER_API_KEY;

const checkUserAccessPermissions = async (req, res, next) => {
  const { userId, accessToken } = req.body;

  if (userId) {
    await authorise(userId, accessToken, res, next);
  } else if (bearerToken(req) === API_KEY) {
    return next();
  } else {
    return res.status(403).json({
      message: 'User access denied',
      error: 'No user id provided'
    });
  }
};

async function authorise(userId, accessToken, res, next) {
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
        'INSERT INTO users (user_id, status, name) VALUES ($1,$2,$3)',
        [userId, false, userName]
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
}

function bearerToken(req) {
  const token = req.get('authorization');
  return token?.split(" ")[1];
}

export default checkUserAccessPermissions;

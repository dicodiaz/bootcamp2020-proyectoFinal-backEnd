const expressJwt = require('express-jwt');
const config = require('./config.json');

const jwt = () => {
  const secret = config.secret;

  return expressJwt( {
    algorithms: ['HS256'],
    secret,
    isRevoked
  }).unless({
    path: [
      '/api/v1/users/customers/authenticate',
      '/api/v1/users/customers/register',
      '/api/v1/users/drivers/authenticate',
      '/api/v1/users/drivers/register',
    ]
  });

};

const isRevoked = async (req, payload, done) =>  {
  const user = payload.sub;

  if (!user) {
    return done(null, true);
  }

  done();
};

module.exports = jwt;

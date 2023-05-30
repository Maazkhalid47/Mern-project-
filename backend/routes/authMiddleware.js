const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, 'RESTFULAPIs', (err, decodedToken) => {
      if (err) {
        return res.status(401).json('Invalid token');
      } else {
        req.user = decodedToken;
        req.id = req.user.id
        next();
        console.log("this is user",req.user)

      }
      
    });
  } else {
    return res.status(401).json('User Unauthorized');
  }
};

module.exports = {authenticateToken};

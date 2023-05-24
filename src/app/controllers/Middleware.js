const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const authorization = (req, res, next) => {

  try {
    const cookies = cookie.parse(req.headers.cookie || '')
    const token = cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id;
    req.userRole = decoded.role;
    if(  req.userRole === false) {
      res.redirect('/')
    }
  } catch {
    return res.sendStatus(403);
  }
};

module.exports = authorization
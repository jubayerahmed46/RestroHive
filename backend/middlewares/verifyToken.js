const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ massage: "unAuthorized Access" });
  }

  jwt.verify(token, secret_key, (err, decoded) => {
    if (err) {
      return res.status(401).send({ massage: "unAuthorized Access" });
    }
    req.credential = decoded;
    next();
  });
};

module.exports = verifyToken;

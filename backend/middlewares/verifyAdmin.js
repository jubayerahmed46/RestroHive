const { getCollection } = require("../db/db");

const verifyAdmin = async (req, res, next) => {
  const userColl = getCollection("users");

  const email = req.credential.email;
  const query = { email };
  const user = await userColl.findOne(query);
  const isAdmin = user.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = verifyAdmin;

const { getCollection } = require("../db/db");

const verifyAdminAndManager = async (req, res, next) => {
  const userColl = getCollection("users");

  const email = req.credential.email;
  const query = { email };
  const user = await userColl.findOne(query);
  const isFalse = user.role === "admin" || user.role === "manager";
  if (!isFalse) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = verifyAdminAndManager;

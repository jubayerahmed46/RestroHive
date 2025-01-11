const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

const { connectToDatabase } = require("./db/db");
const usersRoute = require("./routes/users"); // users
const cartsRoute = require("./routes/carts"); // cart-items
const menusRoute = require("./routes/menu"); // menus

// middlewares
app.use(cors());
app.use(express.json());
// routes
app.use("/users", usersRoute);
app.use("/cart-items", cartsRoute);
app.use("/menus", menusRoute);

const secret_key = process.env.SECRET_KEY;

// create jwt
app.post("/create-jwt", (req, res) => {
  try {
    const payload = req.body;
    const token = jwt.sign(payload, secret_key);
    res.send({ token });
  } catch (error) {
    res.status(500).send({ message: "Internal server error!" });
  }
});

app.get("/", (_, res) => {
  res.send("server is running");
});

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});

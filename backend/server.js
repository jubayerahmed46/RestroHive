const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
// middlewares
app.use(cors());
app.use(morgan("dev"));
console.log(process.env.DB_USER, process.env.DB_PASS);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uf94k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

(async function () {
  try {
    await client.connect();
    const db = client.db("allItemsDB");
    const menuColl = db.collection("menu");
    const cartColl = db.collection("cart-items");

    // get menu data
    app.get("/menus/:category", async (req, res) => {
      try {
        const category = req.params.category;
        const perPageItemSize = parseInt(req.query.size);
        const currPageNunber = parseInt(req.query.page);

        let options = {};

        if (perPageItemSize || currPageNunber) {
          options = {
            skip: perPageItemSize * currPageNunber,
            limit: perPageItemSize,
          };
        }
        const categoryItemsSize = await menuColl.countDocuments({
          category: category,
        });
        const menus = await menuColl.find({ category }, options).toArray();
        res.send({ menus, count: categoryItemsSize });
      } catch (error) {
        res.status(500).send({ message: "Internal server error!" });
      }
    });

    // add cart items in cart collention
    app.get("/cart-items", async (req, res) => {
      try {
        const doc = req.body;
        const result = await cartColl.insertOne(doc);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal server error!" });
      }
    });
  } catch (err) {
    console.dir(err);
  }
})();

app.get("/", (_, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log("express application is running");
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(cors());
// app.use(morgan("dev"));
app.use(express.json());

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
    const userColl = db.collection("users");

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

    // get cart items from cart collention
    app.get("/cart-items", async (req, res) => {
      try {
        const email = req.query?.email;
        const withFoodData = req.query?.withFoodData;
        const query = { userEmail: email };

        const result = await cartColl.find(query).toArray();
        if (withFoodData === "true") {
          const foodIds = result.map((item) => new ObjectId(item.foodId));

          const foodItems = await menuColl
            .find({ _id: { $in: foodIds } })
            .toArray();
          return res.send(foodItems);
        }

        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal server error!" });
      }
    });

    // get all user data
    app.get("/users/:email", async (req, res) => {
      try {
        const email = req.params.email;

        const users = await userColl.find().toArray();
        console.log(users);
        res.send(users);
      } catch (error) {
        res.status(500).send({ message: "Internal server error!" });
      }
    });

    // store/create user and set their role
    app.post("/users", async (req, res) => {
      try {
        /**
         * TODO:
         * 1. take user data from request body : done
         * 2. create a query and check is user already exist in data base : done
         *    - if user already exist return and send error message with inserted id null : done
         * 3. create a document of the user with the property of - name, image, email, role (manage here), Timestamp
         * 4. store user in database send result to the client
         * **/
        const user = req.body;
        const query = {
          email: user.email,
        };

        const isUserExist = await userColl.findOne(query);
        if (isUserExist) {
          return res.send({
            message: "user already exist!",
            insertedId: false,
          });
        }

        const isNoUser = await userColl.estimatedDocumentCount();
        const timestamp = Date.now();
        user.timestamp = timestamp;
        if (!isNoUser) {
          user.role = "admin";
        } else {
          user.role = "customer";
        }

        const result = await userColl.insertOne(user);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal server error!" });
      }
    });

    // add cart items in cart collention
    app.post("/cart-items", async (req, res) => {
      try {
        const doc = req.body;
        // check if this food already exist
        const cartItems = await cartColl.findOne({
          foodId: doc.foodId,
          userEmail: doc.userEmail,
        });

        if (cartItems) {
          return res
            .status(409)
            .send({ message: "Item already exists in the cart." });
        }
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

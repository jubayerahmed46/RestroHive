/**
 * ----- steps to moduler js in express ----
 *
 * 1. import express js: const express =  require('express');
 * 2. call route method: const router = express.Router();
 * 3. replace all app by router and export all route
 *
 *
 * 4. now go server.js and import all routes
 * 5. user all routes as a middleware
 * 6. done
 *
 * */
const express = require("express");
const { getCollection } = require("../db/db");
const { ObjectId } = require("mongodb");

const router = express.Router();

// get cart items from cart collention
router.get("/", async (req, res) => {
  try {
    const cartColl = getCollection("cart-items");
    const menuColl = getCollection("menu");

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

// add cart items in cart collention
router.post("/", async (req, res) => {
  try {
    const cartColl = getCollection("cart-items");

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

module.exports = router;

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

const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");

const router = express.Router();

// get all user data
router.get("/:email", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const userColl = getCollection("users");
    const email = req.params.email;

    const users = await userColl.find({ email: { $ne: email } }).toArray();
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: "Internal server error!" });
  }
});

// get a user data
router.get("/user/:email", async (req, res) => {
  try {
    const userColl = getCollection("users");

    const email = req.params.email;

    const user = await userColl.findOne({ email });
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: "Internal server error!" });
  }
});

// get user role
router.get("/user/role/:email", async (req, res) => {
  try {
    const userColl = getCollection("users");

    const email = req.params.email;
    const user = await userColl
      .aggregate([
        { $match: { email } },
        {
          $project: {
            role: 1,
            _id: 0,
          },
        },
        {
          $addFields: { role: "$role" },
        },
      ])
      .toArray();
    res.send(user[0]);
  } catch (error) {
    res.status(500).send({ message: "Internal server error!" });
  }
});

// store/create user and set their role
router.post("/", async (req, res) => {
  try {
    const userColl = getCollection("users");

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

// upadate user role
router.patch("/user/role/:userId", async (req, res) => {
  try {
    const userColl = getCollection("users");

    const userId = req.params.userId;
    const updateRole = req.body.role;
    const query = { _id: new ObjectId(userId) };
    const update = await userColl.updateOne(query, {
      $set: { role: updateRole },
    });
    res.send(update);
  } catch (error) {
    res.status(500).send({ message: "Internal server error!" });
  }
});

module.exports = router;

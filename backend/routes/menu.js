const express = require("express");
const { getCollection } = require("../db/db");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdminAndManager = require("../middlewares/verifyAdminAndManager");
const { ObjectId } = require("mongodb");
const router = express.Router();

// get all menu data
router.get("/", async (req, res) => {
  try {
    const menuColl = getCollection("menu");
    const menus = await menuColl.find().toArray();
    console.log(menus);
    res.send(menus);
  } catch (error) {
    res.status(500).send({ message: "Internal server error!" });
  }
});

// get menu data
router.get("/:category", async (req, res) => {
  try {
    const menuColl = getCollection("menu");

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

// create new menu
router.post("/", verifyToken, verifyAdminAndManager, async (req, res) => {
  try {
    const menuColl = getCollection("menu");

    const doc = req.body;
    const isExist = await menuColl.findOne(doc);
    if (isExist) {
      return res
        .status(409)
        .send({ message: "Item already axist do not post similar item" });
    }
    const result = await menuColl.insertOne(doc);

    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Internal server error!" });
  }
});

// Update menu
router.patch("/:id", verifyToken, verifyAdminAndManager, async (req, res) => {
  try {
    const menuColl = getCollection("menu");
    const id = req.params.id;
    const doc = req.body;
    const query = { _id: new ObjectId(id) };
    const result = await menuColl.updateOne(query, { $set: { ...doc } });
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Internal server error!" });
  }
});

// delete menu
router.delete("/:id", verifyToken, verifyAdminAndManager, async (req, res) => {
  try {
    const menuColl = getCollection("menu");
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await menuColl.deleteOne(query);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Internal server error!" });
  }
});

module.exports = router;

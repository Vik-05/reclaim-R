const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Items = require("../models/items");

const createItem = async (req, res) => {
  const { title, desc, isFound, isLost, isSell } = req.body;
  try {
    console.log("the item is", title);

    const existingItem = await Items.findOne({ title });
    console.log(existingItem);
    if (existingItem) {
      console.log("hello");
      return res
        .status(400)
        .json({ message: "The item already exists!", status: false });
    } else {
      const newItem = await Items.create({
        title,
        desc,
        isFound,
        isLost,
        isSell,
      });
      console.log(newItem);
      await newItem.save().then().catch();
      res.status(201).json({
        message: "Item created successfully",
        data: newItem,
        // token,
        status: true,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong", status: false });
  }
};

const itemsFound = async (req, res) => {
  try {
    const foundItems = await Items.find({ isFound: true });
    return res.status(200).json({ result: foundItems });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const itemsLost = async (req, res) => {
  try {
    const lostItems = await Items.find({ isLost: true });
    return res.status(200).json({ result: lostItems });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { createItem, itemsFound, itemsLost };

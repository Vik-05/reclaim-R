const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Sell = require("../models/sell");

const sell = async (req, res) => {
  try {
    const sellItems = await Items.find({ isSell: true });
    return res.status(200).json({ result: sellItems });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const itemsBuy = async (req, res) => {
  try {
    const buyItems = await Items.find({ isSell: true });
    return res.status(200).json({ result: buyItems });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  sell,
  itemsBuy,
};

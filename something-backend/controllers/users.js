const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require("../models/users");
const Items = require("../models/items");
const Sell = require("../models/sell");

const createUser = async (req, res) => {
  const { name, email, password, dob, address, phone } = req.body;
  try {
    console.log("the name is", name);

    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "The user already exists!", status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      dob,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: email },
      "thisissomesecret",
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: "User created successfully",
      data: newUser,
      token,
      status: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong", status: false });
  }
};

const signinUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      "thisissomesecret",
      { expiresIn: "1d" }
    );

    return res.status(200).json({ result: existingUser, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await Users.findById({ _id: req.user.id });

    return res.status(200).json({ result: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const createItem = async (req, res) => {
  const { title, desc, isFound, isLost, isSell} = req.body;
  try {
    console.log("the item is", title);

    const existingItem = await Items.findOne({ title });
    console.log(existingItem);
    if (existingItem) {
      console.log("hello");
      return res
        .status(400)
        .json({ message: "The item already exists!", status: false });
    }

    else {
      const newItem = await Items.create({
      title,
      desc,
      isFound,
      isLost,
      isSell,
    });
    console.log(newItem)
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

const sell = async (req, res) => {
  try {
    const sellItems = await Items.find({isSell: true});
    return res.status(200).json({ result: sellItems });
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

const itemsBuy = async (req, res) => {
  try {
    const buyItems = await Items.find({isSell: true});
    return res.status(200).json({ result: buyItems });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = {
  createUser,
  signinUser,
  getSingleUser,
  createItem,
  itemsFound,
  sell,
  itemsLost,
  itemsBuy,
};

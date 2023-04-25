const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require("../models/users");
const Items = require("../models/items");
const Sell = require("../models/sell");

const createUser = async (req, res) => {
  const { name, email, password, dob, addres, phone } = req.body;
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
      addres,
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
    const user = await Users.findById(req.params.id);

    return res.status(200).json({ result: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const createItem = async (req, res) => {
  const {_id, title, desc, image, whenAndwhere, isFound, isLost, isSell} = req.body;
  try {
    console.log("the item is", title);

    const existingItem = await Items.findOne({ _id });
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
      image,
      whenAndwhere,
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

const sell = async (req, res) => {  //Sell mai jaake isSold ko true karna hai tabhi fetch hoga
  try {
    const sellItems = await Items.find({isSell: true});
    return res.status(200).json({ result: sellItems });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const createSell = async (req, res) => {
  const {_id, image, title, desc, price, sold} = req.body;
  try {
    console.log("the sold item is", title);

    const existingItem = await Sell.findOne({ _id });
    console.log(existingItem);
    if (existingItem) {
      console.log("hello");
      return res
        .status(400)
        .json({ message: "The item already exists!", status: false });
    }

    else {
      const sellItem = await Sell.create({
      image,
      title,
      desc,
      price,
      sold,
    });
    
    console.log(sellItem)
    await sellItem.save().then().catch();
    res.status(201).json({
      message: "Item sold successfully",
      data: sellItem,
      // token,
      status: true,
    });
  }
 } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong", status: false });
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

const insertImage = async(req, res) => {
  const {base64} = req.body;
  try {
    Items.create({image: base64});
    res.send({Status : "ok"})
  } catch (error) {
      res.send({Status:"error", data:error});
  }
}

const insertSellImage = async(req, res) => {
  const {base64} = req.body;
  try {
    Sell.create({image: base64});
    res.send({Status : "ok"})
  } catch (error) {
      res.send({Status:"error", data:error});
  }
}
module.exports = {
  createUser,
  signinUser,
  getSingleUser,
  createItem,
  itemsFound,
  sell,
  itemsLost,
  itemsBuy,
  insertImage,
  createSell,
  insertSellImage,
};

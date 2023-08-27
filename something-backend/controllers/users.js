const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require("../models/users");

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
    const user = await Users.findById(req.params.id);
    return res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

module.exports = {
  createUser,
  signinUser,
  getSingleUser,
};

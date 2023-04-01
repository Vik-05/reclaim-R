const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  dob: String,
  phone: String,
  addres: String,
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model("Users", userSchema);

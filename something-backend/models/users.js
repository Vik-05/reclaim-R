const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: "String", require: "true" },
  email: { type: "String", require: "true", unique: "true" },
  password: { type: "String", require: "true" },
  dob: Date,
  phone: { type: "Number", require: "true" },
  address: String,
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model("Users", userSchema);

const { Schema, model } = require("mongoose");

const sellSchema = new Schema({
  title: { type: "String", require: "true" },
  desc: { type: "String", require: "true" },
  price: Number,
  sold: { type: Boolean, default: false },
  image: String,
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model("Sell", sellSchema);

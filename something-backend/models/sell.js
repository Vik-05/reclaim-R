const { Schema, model } = require("mongoose");

const sellSchema = new Schema({
  image: String,
  title: String,
  desc: String,
  price : String,
  sold : {type : Boolean, default:false},
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model("Sell", sellSchema);


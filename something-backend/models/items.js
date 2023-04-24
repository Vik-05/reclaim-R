const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  title: String,
  desc: String,
  whenAndwhere : String,
  image: String,
  isFound: { type: Boolean, default: false },
  isLost: { type: Boolean, default: false },
  isSell: {type : Boolean, default: false},
  // isBuy : {type : Boolean, default: false},
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model("Items", itemSchema);


const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  title: { type: "String", require: "true" },
  desc: { type: "String", require: "true" },
  isFound: { type: Boolean, default: false },
  isLost: { type: Boolean, default: false },
  isSell: { type: Boolean, default: false },
  // isBuy : {type : Boolean, default: false},
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model("Items", itemSchema);

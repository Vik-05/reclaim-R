const mongoose = require("mongoose");

const connection = mongoose
  .connect(
    "mongodb+srv://jigyasachopra742:jigu*2015@cluster0.a7cyb9x.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MONGODB");
  })
  .catch((err) => {
    throw new Error();
  });

module.exports = connection;

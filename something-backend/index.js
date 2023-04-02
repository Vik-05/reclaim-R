const express = require("express");
const cors = require("cors");

const connection = require("./config/db");
const userRoute = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoute);

app.get("/health", (req, res) => res.json({ message: "running fine" }));

connection.then(() => {
  app.listen(5000, () => {
    console.log("Server running");
  });
});

require("dotenv").config();
const bodyParser = require("body-parser");
const app = require("express")();
const cors = require("cors");
const sequelize = require("./utils/db-connect.js");
const User = require('./models/user') 

//syncing the database modesels
sequelize.sync()
app.listen(process.env.PORT, () => console.log("i have started listening" + process.env.PORT));

app.use(bodyParser());
app.use(cors());
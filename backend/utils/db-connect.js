require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DBNAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    define: {
      freezeTableName: true
    },
   
    // timezone:'+05:30'
    //sync: true  
  }
);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => console.log(err));


// Exporting the sequelize object. 
// We can use it in another file
// for creating models
module.exports = sequelize;

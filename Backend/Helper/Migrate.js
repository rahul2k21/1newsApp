//add models and migrate that models
const sequelize = require("./Connect");
const user = require("../Models/user.model");
const Admin = require("../Models/admin.modal");

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

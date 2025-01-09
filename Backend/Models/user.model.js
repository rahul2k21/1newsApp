const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");


const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
  },
  amount: {
    type: DataTypes.DECIMAL,
    defaultValue: 0,
  },
  forgot_Otp: {
    type: DataTypes.INTEGER,
  },
  referCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ReferBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = User;

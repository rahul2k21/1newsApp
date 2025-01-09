const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Admin = sequelize.define("admins", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
  home_welcome: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  home_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  offer_welcome: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  offer_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
 
});

module.exports = Admin;

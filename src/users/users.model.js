const { DataTypes  } = require("sequelize");
const { sequelize } = require("../config/database/database");

const UsersMotors = sequelize.define("users_motors", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
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
    type: DataTypes.STRING,
  },
  rol: {
    type: DataTypes.ENUM("client", "employee"),
  },

  status: {
    type: DataTypes.ENUM("pending", "completed", "cancelled"),
    defaultValue: "pending",
    
  },
});

module.exports = UsersMotors;

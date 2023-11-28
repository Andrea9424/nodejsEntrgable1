const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database/database");

const RepairsMotors = sequelize.define("repair_motors", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM("completed", "pending", "cancelled"),
    defaultValue: "pendig",
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = RepairsMotors;

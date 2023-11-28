const { Sequelize } = require("sequelize");
const { envs } = require("../enviroments/enviroments");
const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
});

const authenticated = async () => {
  try {
    await sequelize.authenticated();
    console.log("connection  successfully");
  } catch (error) {
    error;
  }
};

const syncUp = async () => {
  try {
    await sequelize.sync();
    console.log("connection synced successfully");
  } catch (error) {}
};

module.exports = {
  sequelize,
  authenticated,
  syncUp,
};

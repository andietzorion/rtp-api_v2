const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize_node", "root", "", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

module.exports = sequelize;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("rtp-senin", "root", "", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

module.exports = sequelize;

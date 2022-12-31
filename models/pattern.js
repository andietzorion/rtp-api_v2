const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Pattern = sequelize.define("pattern", {
  id: 
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  no_autospin: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  dc_value: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  pattern_01: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  pattern_02: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  pattern_03: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  itemId: {
    type: Sequelize.STRING,
    allowNull: true,
  },  
},{ 
    freezTableName: true,
      timestamps: false
});

module.exports = Pattern;

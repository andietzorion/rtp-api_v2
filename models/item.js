// const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const Item = sequelize.define("item", 
{
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  show_patterns: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  show_rtp: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  show_dc: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  provider_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  game_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rtp_percentage: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bet_start: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bet_end: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gacor_time_start: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gacor_time_end: {
    type: DataTypes.STRING,
    allowNull: true,
  }
},{ 
  freezTableName: true,
    timestamps: false
});



module.exports = Item;

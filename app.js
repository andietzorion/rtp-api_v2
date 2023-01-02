const express = require("express");
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');

const app = express();

const sequelize = require("./util/database");

const Item = require("./models/item");
const Pattern = require("./models/pattern");

Item.hasMany(Pattern, {
  foreignKey: "itemId",
});
Pattern.belongsTo(Item);

const indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(indexRoutes.router);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000, () => console.log("Server is running"));
  })
  .catch((err) => console.log(err));

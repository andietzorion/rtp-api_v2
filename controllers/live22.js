const Item = require("../models/item");
const Pattern = require("../models/pattern");

exports.getLive22= async (req, res, next) => {
  let results = [];

  let item = await Item.findAll({
    where: { provider_name: 'Live 22' },
    attributes: [
      "id",
      "game_name",
      "rtp_percentage"
    ],
    order: [
      ['game_name', 'DESC'],
    ],
    nest: true,
  });

  try {
    results.push({
      items: item,
      message: "Live22 Game List",
      size: 50,
      status: 200,
    });
    console.log(results);
    res.send(results);
  } catch (err) {
    console.log(err);
  }
};

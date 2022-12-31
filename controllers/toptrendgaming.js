const Item = require("../models/item");
const Pattern = require("../models/pattern");

exports.getToptrendgaming= async (req, res, next) => {
  let results = [];

  let item = await Item.findAll({
    where: { provider_name: 'Topt Tend Gaming' },
    attributes: [
      "id",
      "game_name",
      "img_url",
      "rtp_percentage",
      "bet_start",
      "bet_end",
      "gacor_time_start",
      "gacor_time_end"
    ],
    nest: true,
  });

  try {
    results.push({
      items: item,
      message: "Top Trend Gaming Game List",
      size: 50,
      status: 200,
    });
    console.log(results);
    res.send(results);
  } catch (err) {
    console.log(err);
  }
};

const Item = require("../models/item");
const Pattern = require("../models/pattern");

exports.getAdvant= async (req, res, next) => {
  let results = [];

  let item = await Item.findAll({
    where: { provider_name: 'AdvantPlay' },
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
      message: "advantplay game list",
      size: 50,
      status: 200,
    });
    console.log(results);
    res.send(results);
  } catch (err) {
    console.log(err);
  }
};

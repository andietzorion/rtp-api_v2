const Item = require("../models/item");
const Pattern = require("../models/pattern");

exports.getOnetouch= async (req, res, next) => {
  let results = [];

  let item = await Item.findAll({
    where: { provider_name: 'Onetouch' },
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
    order: [
      ['game_name', 'DESC'],
    ],
    nest: true,
  });

  try {
    results.push({
      items: item,
      message: "Onetouch Game List",
      size: 34,
      status: 200,
    });
    console.log(results);
    res.send(results);
  } catch (err) {
    console.log(err);
  }
};

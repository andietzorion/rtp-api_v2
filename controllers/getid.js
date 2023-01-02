const Item = require("../models/item");
const Pattern = require("../models/pattern");

exports.getId = async (req, res, next) => {
  let results = [];

  let item = await Item.findAll({
    where: { id: req.params.id},
    attributes: [
      "provider_name",
      "show_rtp",
      "show_patterns",
      "show_dc",
      "game_name",
      "img_url",
      "rtp_percentage",
      "bet_start",
      "bet_end",
    ],
    include: [
      {
        model: Pattern,
        raw: true,
        attributes: [
          "no_autospin",
          "dc_value",
          "pattern_01",
          "pattern_02",
          "pattern_03",
        ],
      },
    ],
    nest: true,
  });

  try {
    results.push({
      items: item[0],
      message: "detail game",
      status: 200,
    });
    console.log(results);
    res.send(results[0]);
  } catch (err) {
    console.log(err);
  }
};

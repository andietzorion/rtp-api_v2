const Item = require("../models/item");
const Pattern = require("../models/pattern");

exports.getHome = async (req, res, next) => {
  let results = [];

  let item = await Item.findByPk("13490882-9119-4895-8726-29bac8a1a8ab", {
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
      items: item.get({ plain: true }),
      message: "detail game",
      status: 200,
    });
    console.log(results);
    res.send(results);
  } catch (err) {
    console.log(err);
  }
};

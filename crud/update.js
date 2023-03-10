const Item = require("../models/item");

exports.getUpdate = async function (req, res, next){
    try {
        let item = await Item.bulkCreate((req.body), { updateOnDuplicate: ["id", "game_name", "rtp_percentage"] })
        res.status(201).json({
            items: item,
            message: 'Berhasil update Items'
        })
    } catch (error) {
        res.status(404).json({
            message: error,
        });

    }
};
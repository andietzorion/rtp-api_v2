const Pattern = require("../models/pattern");

exports.getPattern = async function (req, res, next){
    try {
        let item = await Pattern.bulkCreate(req.body)
        res.status(201).json({
            items: item,
            message: 'Berhasil Tambah Banyak Items'
        })
    } catch (error) {
        res.status(404).json({
            message: error,
        });

    }
};
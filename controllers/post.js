const Item = require("../models/item");

exports.getPost = async function (req, res, next){
    try {
        let item = await Item.bulkCreate(req.body)
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
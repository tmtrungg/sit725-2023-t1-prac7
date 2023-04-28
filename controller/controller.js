let model = require('../model/model');

const addCat = (req,res) => {
    let cat = req.body;
    model.addCat(cat, (err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Cat added'});
        }
    });
}

const remove = (req,res) => {
    let cat = req.body;
    model.deleteCat(cat, (err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Cat removed'});
        }
    });
}

const getAllCat = (req,res) => {
    model.getAllCats((err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Get cat successfully'});
        }
    });
}

module.exports = {addCat,getAllCat,remove}
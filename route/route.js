var express = require('express');
let router = express.Router();
let controller = require('../controller/controller');

router.post('/api/cats', (req, res) => {
    controller.addCat(req,res);
});

router.get('/api/cats',(req,res) => {
    controller.getAllCat(req,res);
});

module.exports = router;
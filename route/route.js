var express = require('express');
let router = express.Router();
let controller = require('../controller/controller');

router.post('/api/cats', (req, res) => {
    controller.addCat(req,res);
});

router.get('/api/cats',(req,res) => {
    controller.getAllCat(req,res);
});

router.delete('/api/cats',(req,res) => {
    controller.remove(req,res);
});

module.exports = router;
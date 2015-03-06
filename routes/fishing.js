var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/cast', function(req, res) {
    res.json({fish: 'trout'});
});


module.exports = router;

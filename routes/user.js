var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/current', function(req, res) {
    res.json({user: req.user});
});


module.exports = router;

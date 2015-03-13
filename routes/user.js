var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/current', function(req, res) {
    res.json({user: req.user});
});


router.get('/inventory', function(req, res) {
  if(!req.user) return res.status(403).end();
  var inventory = req.user.getInventories({include: [models.Item]}).then(function(inventory) {
    res.json({inventory: inventory});
  });
});


module.exports = router;

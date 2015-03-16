var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/current', function(req, res) {
    res.json({user: req.user});
});


router.get('/inventory', function(req, res) {
  if(!req.user) return res.status(403).end();
  req.user.getInventories({include: [models.Item]}).then(function(inventory) {
    var sum = inventory.reduce(function(running, current) { return running + current.amount;}, 0);
    res.json({inventory: inventory, total: sum, coins:req.user.coins});
  });
});


module.exports = router;

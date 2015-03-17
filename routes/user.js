module.exports = function(io) {
  var models  = require('../models');
  var express = require('express');
  var router  = express.Router();
  var inventory = require('../lib/inventory');
  
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
  
  router.delete('/inventory/:id', function(req, res) {
    if(!req.user) return res.status(403).end();
    
    inventory.removeFromInventory(req.user, req.params.id, io, function() {
      req.user.getInventories({where:{ItemId: req.params.id}}).then(function(inventory) {
        var sum = inventory.reduce(function(running, current) { return running + current.amount;}, 0);
        res.json({inventory: inventory, total: sum, coins:req.user.coins});
      });      
    });
  });  
  
  return router;
}
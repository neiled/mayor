module.exports = function(io)
{
  var models  = require('../models');
  var express = require('express');
  var router  = express.Router();
  var uuid = require('uuid');
  var client = require('../config/redis');
  var debug = require('debug')('api:fishing');
  var inventory = require('../lib/inventory');
  var analytics = require('../lib/analytics');


  client.on("error", function (err) {
      debug("Error " + err);
  });

  router.post('/cast', function(req, res) {
    if(!req.user) return res.status(403).end();
    var fish = getFish(function(fish) {
      client.set("fish:"+fish.id, fish.type_id);
      analytics.addEvent('fishing', {fish: fish});
      res.json({fish: fish});
    });
  });

  router.post('/keep/:id', function(req, res) {
    if(!req.user) return res.status(403).end();
    client.get("fish:"+req.params.id, function(err, reply) {
      // reply is null when the key is missing
      if(reply)
      {
        inventory.addToInventory(req.user, reply, io, function() {
          res.status(200).end();
        });
      }
    });

  });

  var getFish = function(callback) {
    debug("getFish");
    var rarity = getRarity();
    models.Item.findAll({where: {category: 'FISH', rarity: rarity}}).then(function (items) {
        var fish = items[Math.floor(Math.random()*items.length)];
        callback({id: uuid.v4(), name: fish.name, type_id: fish.id});
    });
  };

  var getRarity = function() {
    var random = Math.random() * 1000;

    if(random < 500)
      return "Very Common";
    if(random < 800)
      return "Common";
    if(random < 930)
      return "Uncommon";
    if(random < 995)
      return "Rare";
    return "Very Rare";
  };


  return router;
}

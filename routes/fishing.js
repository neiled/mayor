var models  = require('../models');
var express = require('express');
var router  = express.Router();
var uuid = require('uuid');
var redis = require("redis"),
    client = redis.createClient();
var debug = require('debug')('api:fishing');



client.on("error", function (err) {
    console.log("Error " + err);
});

router.post('/cast', function(req, res) {
  //create random fish, put it in redis
  var fish = getFish(function(fish) {
    debug(fish);
    client.set("fish:"+fish.id, fish.type_id);
    res.json({fish: fish});
  });
});

router.post('/keep/:id', function(req, res) {
  //get fish from redis
  //store the fish type in inventory
  client.get("fish:"+req.params.id, function(err, reply) {
    // reply is null when the key is missing
    if(reply)
    {
      console.log(reply);
      models.Inventory.findOrCreate({where: { item_id: reply }}).spread(function(fish) {
        var newAmount = fish.amount || 0;
        newAmount += 1;
        fish.amount = newAmount;
        fish.save().then(function()
        {
          res.status(200).end();
        });
      });
    }
});

});

var getFish = function(callback) {
  debug("getFish");
  var rarity = getRarity();
  models.Item.findAll({where: {category: 'FISH', rarity: rarity}}).then(function (items) {
      var fish = items[Math.floor(Math.random()*items.length)];
      debug("found fish");
      debug(fish);
      callback({id: uuid.v4(), name: fish.name, type_id: fish.id});
  });
};

var getRarity = function() {
  var random = Math.random() * 1000;

  if(random < 500)
    return "Very Common";
  if(random < 750)
    return "Common";
  if(random < 900)
    return "Uncommon";
  if(random < 999)
    return "Rare";
  return "Very Rare";
};




module.exports = router;

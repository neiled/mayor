var models  = require('../models');
var express = require('express');
var router  = express.Router();
var uuid = require('uuid');
var redis = require("redis"),
    client = redis.createClient();


client.on("error", function (err) {
    console.log("Error " + err);
});

router.post('/cast', function(req, res) {
  //create random fish, put it in redis
  var fish = getFish();
  client.set("fish:"+fish.id, fish.type_id);
  res.json({fish: fish});
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

var getFish = function() {
  return {id: uuid.v4(), name: 'trout', type_id: 1};
}


module.exports = router;

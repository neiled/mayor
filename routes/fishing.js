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

var getFish = function() {
  return {id: uuid.v4(), name: 'trout', type_id: 1};
}


module.exports = router;

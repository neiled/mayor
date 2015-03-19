var models  = require('../models');
var debug = require('debug')('lib:inventory');

var sendUpdate = function(user, io) {
  user.getInventories({include: [models.Item]}).then(function(inventory) {
    var sum = inventory.reduce(function(running, current) { return running + current.amount;}, 0);
    io.emit('inventory:update:'+user.id, {inventory: inventory, total: sum, coins: user.coins});
  });

};

module.exports.addToInventory = function(user, itemID, io, callback) {
  models.Inventory.findOrCreate({where: { UserId: user.id, ItemId: itemID },  defaults: {amount: 0}}).spread(function(fish) {
    fish.increment('amount').then(function(fish) {
      sendUpdate(user, io);
      callback();
    });
  });
};

module.exports.removeFromInventory = function(user, itemID, io, opts, callback) {
  models.Inventory.find({where: { UserId: user.id, ItemId: itemID }}).then(function(fish) {
    if(!fish) {
      callback();
      return;
    }
    var item = fish.getItem();
    item.get('cost').then(function(cost) {
      fish.decrement('amount').then(function(fish) {
        if(opts.sell) {
          module.exports.addCoins(user, cost, io);
        }
        models.Inventory.destroy({where: {UserId: user.id, amount: 0}}).then(function() {
          sendUpdate(user, io);
          callback();
        });
      });

    });
  });
};

module.exports.sellFromInventory = function(user, itemID, io, callback) {
  module.exports.removeFromInventory(user, itemID, io, {sell: true}, callback);
};


module.exports.addCoins = function(user, amount, io) {
  debug('addCoins');
  debug(amount);
  user.increment('coins', {by: amount}).then(function() {
    sendUpdate(user, io);
  });
};

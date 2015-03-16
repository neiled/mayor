var models  = require('../models');
var debug = require('debug')('lib:inventory');


module.exports.addToInventory = function(user, itemID, io, callback) {
  models.Inventory.findOrCreate({where: { UserId: user.id, ItemId: itemID },  defaults: {amount: 0}}).spread(function(fish) {
    fish.increment('amount').then(function(fish) {
      user.getInventories({include: [models.Item]}).then(function(inventory) {
        var sum = inventory.reduce(function(running, current) { return running + current.amount;}, 0);
        io.emit('inventory:update:'+user.id, {inventory: inventory, total: sum, coins: user.coins});
        callback();
      });
    });
  });
};

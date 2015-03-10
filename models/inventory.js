"use strict";

module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define('Inventory', {
    item_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Inventory.belongsTo(models.User);
      }
    }
  });

  return Inventory;
};

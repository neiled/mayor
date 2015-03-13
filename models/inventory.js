"use strict";

module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define('Inventory', {
    amount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Inventory.belongsTo(models.User);
        Inventory.belongsTo(models.Item);
      }
    }
  });

  return Inventory;
};

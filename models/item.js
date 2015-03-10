"use strict";

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    rarity: DataTypes.STRING,
    category: DataTypes.STRING
  }, { });

  return Item;
};

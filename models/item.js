"use strict";

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    type_id: DataTypes.INTEGER
  }, { });

  return Item;
};

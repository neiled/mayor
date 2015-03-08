"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    twitterId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasOne(models.Inventory);
      }
    }
  });

  return User;
};

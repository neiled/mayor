"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    twitterId: DataTypes.STRING,
    gitHubId: DataTypes.STRING,
    coins: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Inventory);
      }
    }
  });

  return User;
};

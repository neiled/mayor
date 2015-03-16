"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable('Inventories',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      UserId: {type: DataTypes.INTEGER},
      ItemId: {type: DataTypes.INTEGER},
      amount: {type: DataTypes.INTEGER, defaultValue: 0}
    }).complete(done);
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('Inventories').complete(done);
  }
};

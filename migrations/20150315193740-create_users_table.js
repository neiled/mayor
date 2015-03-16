"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable('Users',
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
      name: {type: DataTypes.STRING},
      email: {type: DataTypes.STRING},
      twitterId: {type: DataTypes.STRING},
      gitHubId: {type: DataTypes.STRING},
      coins: {type: DataTypes.INTEGER, defaultValue: 0}
    }).complete(done);
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('Users').complete(done);
  }
};

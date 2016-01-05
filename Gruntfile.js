var dotenv = require('dotenv');
dotenv.load();

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    fixtures: {
        import_test_data: {
            src: ['fixtures/*.json'],
            models: function () {  //returns mapping model name: model
                return require('./models');
            }
        }
    }
  });


  grunt.loadNpmTasks('sequelize-fixtures');


};

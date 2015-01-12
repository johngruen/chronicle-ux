module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('style', [
    'sass',
    'autoprefixer',
  ]);
};

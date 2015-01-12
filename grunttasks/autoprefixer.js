module.exports = function (grunt) {
  'use strict';

  grunt.config('autoprefixer', {
    dist: {
      src: 'app/styles/compiled.css',
      dest: 'app/styles/compiled.css'
    }
  });
};

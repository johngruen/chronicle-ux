module.exports = function (grunt) {
  'use strict';

  grunt.config('sass', {
    options: {
      imagePath: '/images',
      // outputStyle: 'compressed',
      precision: 3
    },
    styles: {
      files: {
        'app/styles/compiled.css': 'app/styles/main.scss'
      }
    }
  });
};

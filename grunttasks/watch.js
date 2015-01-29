module.exports = function (grunt) {
  'use strict';

  grunt.config('watch', {
    files: ['app/styles/*.scss',
    'app/styles/modules/*.scss',
    'app/scripts/templates/*.html',
    'app/index.html',
    'app/scripts/views/**/*.js',
    'app/scripts/templates/**/*.html'
    ],
    tasks: ['sass','autoprefixer'],
    options: {
      livereload: true,
    }
  });
};

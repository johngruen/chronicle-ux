module.exports = function (grunt) {
  'use strict';

  grunt.config('connect', {
    connect: {
      options: {
        hostname: 'localhost',
        port: 8888,
        base: './app/'
      }
    }
  });
};

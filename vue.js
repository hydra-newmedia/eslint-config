'use strict';

module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/recommended', // or 'plugin:vue/base'
    './modern.js',
  ],
  env: {
    browser: true,
  },
};

'use strict';

module.exports = {
  extends: './base.js',
  rules: {
    'no-var': 2, // alawys use const or let
    'no-await-in-loop': 1,
    'radix': 2,
    'no-with': 2,
    'no-useless-return': 1,
    'no-sequences': 2,
    'no-return-await': 1,
    'arrow-spacing': 2,
    'no-const-assign': 2,
    'prefer-rest-params': 2,
    'complexity': 1,
    'max-nested-callbacks': 1,
    'no-duplicate-imports': 2,
    'prefer-arrow-callback': 1,
    'prefer-spread': 1,
    'no-useless-concat': 1,
    'template-curly-spacing': 1,
    'curly': [1, 'multi-line'],
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};

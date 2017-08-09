'use strict';

module.exports = {
  extends: 'eslint:recommended',
  // async await support
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'script',
  },
  env: {
    es6: true,
    node: true, // node & webpack
  },
  rules: {
    'prefer-const': 2, // alawys use const when possible
    'semi': 2, // always semicolons
    'indent': [1, 2], // 2 space indention
    'eqeqeq': 1, // === is required
    'quotes': [1, 'single'], // only single quotes
    'comma-dangle': [1, 'always-multiline'], // require trailing comma
    'global-require': 0,
    'arrow-parens': 0,
    'object-shorthand': [1, 'always'],
    'no-path-concat': 1,
    'no-console': 0,
    'no-extra-bind': 1,
    'no-implied-eval': 2,
    'max-len': [1, 100],
    'space-infix-ops': [1, { int32Hint: true }],
    'eol-last': 2,
    'brace-style': 2,
    'camelcase': 1,
    'no-eval': 2,
    // tidy spacings
    'no-spaced-func': 2,
    'space-before-function-paren': [1, {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'keyword-spacing': 1,
    'comma-spacing': 1,
    'array-bracket-spacing': [
      1,
      'never',
      {
        singleValue: false,
        // objectsInArrays: true,
      },
    ],
    'object-curly-spacing': [1, 'always'],
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1, maxBOF: 0 }],
  },
};

// strict:
//   - 2
//   - 'global'

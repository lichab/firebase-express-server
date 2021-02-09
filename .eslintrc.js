/* eslint-disable quote-props */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['error', 'never']
  },
  parserOptions: {
    ecmaVersion: 8
  }
};

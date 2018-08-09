module.exports = {
  extends: [
    'unobtrusive',
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  env: {
    es6: true,
    node: true,
    "jest/globals": true
  },
  plugins: ['jest'],
  globals: {
  },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    semi: [2, 'always'],
    quotes: [2, 'single'],
    indent: [2, 2],
    'linebreak-style': [2, 'unix'],
    'brace-style': [2, '1tbs'],
    'array-bracket-spacing': [2, 'never'],
    camelcase: [2, { properties: 'always' }],
    'keyword-spacing': [2],
    'eol-last': [2],
    'no-trailing-spaces': [2],
    'no-process-env': ['off', 'always'],
    'no-console': ['off', 'always']
  }
};

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['plugin:import/recommended', 'prettier'],
  plugins: [],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    process: 'readonly',
  },
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
      "prettier/prettier": "error",
        "class-methods-use-this": "off",
        "no-params-reassign": "off",
        "camelcase": "off",
        "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "@typescript-eslint/camelcase": "off",
        "no-param-reassign": "warn"
  },
};

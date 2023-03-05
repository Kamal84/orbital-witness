module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
  },
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': ['error', { varsIgnorePattern: 'props' }],
    'vue/multi-word-component-names': 'off',
    "semi": [2, "always"],
  },
};

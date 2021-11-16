module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/explicit-function-return-type': 1,
      '@typescript-eslint/no-explicit-any': 1,
      '@typescript-eslint/no-var-requires': 1,
      '@typescript-eslint/no-empty-function': 2,
      'vue/custom-event-name-casing': 2,
      'no-use-before-define': 2,
      '@typescript-eslint/no-use-before-define': 2,
      '@typescript-eslint/ban-ts-comment': 1,
      '@typescript-eslint/ban-types': 1,
      '@typescript-eslint/no-non-null-assertion': 2,
      '@typescript-eslint/explicit-module-boundary-types': 2,
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-unused-vars': ['error'],
      eqeqeq: 2,
      camelcase: 1,
      'use-isnan': 2,
      'no-cond-assign': 2,
      'no-unused-vars': 0,
      'no-const-assign': 2,
      'no-constant-condition': 2,
      'no-delete-var': 2,
      'no-dupe-keys': 2,
      'no-else-return': 2,
      'no-fallthrough': 1,
      'no-func-assign': 2,
      'no-implicit-coercion': 1,
      'no-inner-declarations': [2, 'functions'],
      'no-invalid-regexp': 2,
      'no-invalid-this': 2,
      'no-multiple-empty-lines': [1, { max: 2 }],
      'no-nested-ternary': 0,
      'no-ternary': 0,
      'no-unneeded-ternary': 2,
      'no-var': 2
    }
  }
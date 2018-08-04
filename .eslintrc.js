// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': 1,
    'space-before-function-paren': ['error', 'always'],
    'no-underscore-dangle': ['error', { 'allow': ['_id', '_collection'] }],
    'arrow-parens': ['error', 'as-needed'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'eqeqeq': 1, // ===
    'no-tabs': 0,
    'camelcase': 0,
    'no-mixed-operators': 1, // + *
    'class-methods-use-this': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-restricted-syntax': 1, // for in
    'guard-for-in': 1, // for in
    'prefer-destructuring': 1,
    'no-use-before-define': 0, // hoisting
    'no-console': 0,
    'no-restricted-globals': 1, // isNaN
    'one-var': ['error', 'never'],
    'object-curly-newline': 0,
    'semi': ["error", "never"],
    'max-len': ["error", { "code": 120 }],
    'no-trailing-spaces': ["error", { "skipBlankLines": true }],
  }
}

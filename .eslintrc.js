// https://eslint.org/docs/user-guide/configuring
module.exports = {
  plugins: ['vue'], // enable vue plugin
  extends: ['plugin:vue/essential', 'prettier'] // activate vue related rules
};
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'prettier', // activate vue related rules
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vuefix',
    'vue' // enable vue plugin
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    indent: 0,
    'space-before-function-paren': 0,
    semi: 0,
    'comma-dangle': [0, 'always'], // 对象字面量项尾必有逗号
    'spaced-comment': 0,
    'no-tabs': 0,
    'eol-last': 0,
    'comma-spacing': 0,
    camelcase: 0,
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  }
};

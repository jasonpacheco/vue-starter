module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended", 
    "eslint:recommended", 
    "@vue/prettier",
],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'prettier/prettier': ['warn', { 'singleQuote': true, 'trailingComma': 'all' }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 'warn',
    'vue/padding-line-between-blocks': 'warn',
    'vue/html-self-closing': ['warn', {
      'html': {
        'void': 'always'
      }
    }],
    'vue/no-unused-components': 'warn',
  }
};

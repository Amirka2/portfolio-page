const path = require('path')

module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "@feature-sliced/eslint-config/rules/public-api",
    "@feature-sliced/eslint-config/rules/layers-slices",
    "@feature-sliced/eslint-config/rules/import-order/experimental"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": [
      "tsconfig.json",
    ],
    "tsconfigRootDir": __dirname
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/array-type": ["error", { "default": "array" }],
    "react/jsx-one-expression-per-line": ["error", { "allow": "none" }],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "react/function-component-definition": ["error", {
      "namedComponents": "arrow-function"
    }],
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true
    }],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "always-multiline",
      "enums": "always-multiline",
      "generics": "ignore"
    }],
    "semi": "off",
    "@typescript-eslint/member-delimiter-style": ["error"],
    "jsx-a11y/label-has-associated-control": ["error", { "assert": "htmlFor" }],
    "import/no-unresolved": "off", // https://github.com/iamturns/eslint-config-airbnb-typescript#why-is-importno-unresolved-disabled
    "react/no-array-index-key": "off",
    "no-restricted-syntax": "off",
    "no-plusplus": "off",
    "import/order": "off",
    "@typescript-eslint/naming-convention": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off"
  },
  "settings": {
    "import/resolver": {
      node: {
        paths: ['.'],
      }
    }
  },
}

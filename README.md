# eslint-config

hydra-newmedia eslint config comes with two different styles (`base` and `modern`) and a `vue` style for [vue](https://vuejs.org) project.

## Installation

`npm install --save-dev @hydrant/eslint-config eslint`

## Setup

### Base

Add these lines to your `package.json`:
```json
"eslintConfig": {
  "extends": "@hydrant/eslint-config/base"
}
```

### Modern

Add these lines to your `package.json`:
```json
"eslintConfig": {
  "extends": "@hydrant/eslint-config/modern"
}
```

### Vue

Install the package with all vue dependencies:

```
npm install --save-dev @hydrant/eslint-config eslint eslint-plugin-vue eslint-plugin-html
```

Add these lines to your `package.json`:
```json
"eslintConfig": {
  "extends": "@hydrant/eslint-config/vue"
}
```

## License

MIT

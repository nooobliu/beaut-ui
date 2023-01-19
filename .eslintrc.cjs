module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:storybook/recommended',
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react'],
  rules: {
    'no-debugger': 0, // 禁止使用debugger
    'no-duplicate-imports': [
      1,
      {
        includeExports: true
      }
    ], // 不允许重复导入
    'arrow-parens': 0, // 箭头函数用小括号括起来 - 关闭
    'no-var': 0, // 禁用var，用let和const代替
    // 类型断言相关，不关闭stores文件类型报错
    '@typescript-eslint/consistent-type-assertions': 0,
    // 允许使用type定义类型
    '@typescript-eslint/consistent-type-definitions': 0
  }
}

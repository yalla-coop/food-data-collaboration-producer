module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    ['@babel/plugin-syntax-import-attributes', { deprecatedAssertSyntax: true }]
  ]
};

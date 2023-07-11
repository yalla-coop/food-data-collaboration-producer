module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'nonblock-statement-body-position': ['error', 'below'],
    curly: ['error', 'all'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'react/jsx-curly-newline': 'off'
  }
};

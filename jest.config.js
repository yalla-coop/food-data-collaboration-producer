module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/test-setup.js'],
  transformIgnorePatterns: [],
  testEnvironment: 'node',
  moduleNameMapper: {
    '@datafoodconsortium/connector': require.resolve(
      '@datafoodconsortium/connector'
    )
  }
};

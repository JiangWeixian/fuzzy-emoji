const { jsWithBabelESM } = require('ts-jest/presets')

module.exports = {
  cacheDirectory: './jest/cache',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  coverageDirectory: './jest/coverage',
  preset: 'ts-jest',
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    ...jsWithBabelESM.transform,
  },
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['node_modules/((?!gemoji))/index.js'],
  roots: ['<rootDir>/test'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testRegex: '/test/.+\\.test\\.tsx?$',
  verbose: true,
}

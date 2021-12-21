const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,

  collectCoverageFrom: [
    '<rootDir>/src/modules/**/services/**/*.ts',
    '<rootDir>/src/shared/middlewares/**/services/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],

  coverageReporters: [
    'text-summary',
    'lcov'
  ],

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),

  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/']
}

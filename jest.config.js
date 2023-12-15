/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['./jest.polyfills.js'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: {
    customExportConditions: [''],
  },

  // A map from regular expressions to paths to transformers
  transform: {
    "\\.jsx?$": [
        'babel-jest',
        {
            presets: ['@babel/preset-env'],
        },
    ],
  },
};

module.exports = config;

const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io/',
    defaultCommandTimeout: 15000,
    testIsolation: false,
    viewportHeight: 900,
    viewportWidth: 1400,
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      },    
  },

});

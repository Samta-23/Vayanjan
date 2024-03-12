const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*.js',
    baseUrl: 'http://vayanjan-dev.s3-website-us-east-1.amazonaws.com/welcome/dummy',
    testIsolation: false
  },
});

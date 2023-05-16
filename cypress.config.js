const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gateway.marvel.com/v1',
    env: {
      requestMode: true,
      apikey: "",
      privatekey: ""
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


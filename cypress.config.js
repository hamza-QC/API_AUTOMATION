const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "baseUrl": "https://serverest.dev"
  },
  e2e: {
    "baseUrl": "https://reqres.in",
    "video": false,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

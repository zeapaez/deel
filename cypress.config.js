const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.letsdeel.com/login',
     setupNodeEvents(on, config) {
       // implement node event listeners here
     },
    "experimentalSessionAndOrigin": true,
    "chromeWebSecurity": false,
    env: {
      username: 'zeapaez@hotmail.com',
      password: 'Deel-123abc-'
    }
  },
});

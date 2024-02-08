const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://platform.zaia.app/auth/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

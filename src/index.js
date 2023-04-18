const { default: App } = require('./App/App')
const { default: HttpClient } = require('./App/services/HttpClient')

const container = document.querySelector('#app')


HttpClient.get('profile')
  .then(profile => new App(profile, container).render())
  .catch(console.error)
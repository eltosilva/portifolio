import App from './App/App'
import HttpClient from './App/services/HttpClient'

const container = document.querySelector('#app')

HttpClient.get(_ENV.url)
  .then(profile => new App(profile, container).render())
  .catch(console.error)
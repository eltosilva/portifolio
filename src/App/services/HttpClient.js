export default class HttpClient {

  static async get(url) {
    try {
      let dados = await fetch(url)

      return dados.json()

    } catch (exception) {
      throw exception
    }
  }
}
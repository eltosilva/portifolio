export default class HttpClient {

  static async get(url) {
    try {
      let dados = await fetch(url)

      let json =  await dados.json()

      return json.profile ? json.profile : json

    } catch (exception) {
      throw exception
    }
  }
}
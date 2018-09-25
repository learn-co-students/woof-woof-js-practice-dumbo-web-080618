class Adapter {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  //Just make a get request to a URL

  get(path) {
    return fetch(path).then(res =>
      res.json())
  }

  getDoggos() {
    return this.get(this.baseURL)
  }

  getSpecificDoggo(id) {
    return this.get(`${this.baseURL}/${id}`)
  }

  updateDoggo(id, data) {
    return fetch(`${this.baseURL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
}

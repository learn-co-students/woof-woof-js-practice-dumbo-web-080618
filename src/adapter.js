class Adapter {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  get(path) {
    return fetch(path).then(res => res.json())
  }

  getDoggos() {
    return this.get(this.baseURL)
  }

  getGoodDoggos() {
    let doggos = this.getDoggos().then(doggos => {
      return doggos.filter(function(dog) {
        return dog.isGoodDog === true
      })
    })
    return doggos
  }

  getDoggo(id) {
    return this.get(this.baseURL+"/"+id)
  }

  patchDoggo(id, data) {
     return fetch((this.baseURL+'/'+id), {
        method: 'PATCH',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }).then(res => res.json())
  }
}

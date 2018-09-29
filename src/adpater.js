let Adapter = (function(){
  let filter = false

  return class Adapter {
    constructor(baseURL) {
      this.baseURL = baseURL
    }

    toggleFilter() {
      filter = !filter
    }

    filterOn() {
      return filter
    }
    get (path){
      return fetch(path)
        .then(res => res.json())
    }
  
    getDogs(){
      return this.get(this.baseURL)
    }
  
    getADog(id) {
      return this.get(`${this.baseURL}/${id}`)
    }
    
    patchADog(id, dog){
      // const data = {isGoodDog: this.isGoodDog}
      const data = JSON.parse(JSON.stringify(dog))
      return fetch(`${this.baseURL}/${id}`,{
        method:'PATCH', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
})()

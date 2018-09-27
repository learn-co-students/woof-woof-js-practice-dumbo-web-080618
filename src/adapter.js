class Adapter{
  constructor(baseURL){
    this.baseURL = baseURL
  }

  get(path){
    return fetch(path).then(res => res.json())
  }

  getDogs(){
    return this.get(this.baseURL)
  }

  getDog(id){
    let url = this.baseURL +`/${id}`
    return this.get(url)
  }

  patch(path, data){
    fetch(path, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }

  patchDog(id, data){
    let url = this.baseURL + `/${id}`
    return this.patch(url, data);
  }
}

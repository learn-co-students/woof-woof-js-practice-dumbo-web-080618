//put all URL api base thing here
class Adapter{

  constructor(baseURL){
    this.baseURL = baseURL;
  }
  //just make a GET request to an URL
  get(path){
    return fetch(path).then(res => res.json())
  }

  getPups(){
    return this.get(this.baseURL)
  }

  getPupz(good){
    return good ? getGoodPup() : getPups()
  }

  getOnePup(id){
    return this.get(`${this.baseURL}/${id}`)
    // this.baseURL.find(dog => (dog.id === id))
  }

  patch(GoodDog){
    let patchData = {
      isGoodDog: GoodDog
    };
    return patchData;
  }

  makePatchRequest(id, isGoodDog){
    fetch(`${this.baseURL}/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(this.patch(isGoodDog)),
      headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
    }).then(res => console.log(res));
  }

  getGoodPups(){
    return this.getPups().then(dogs => dogs.filter(function(dog){
      return dog.isGoodDog === true
    })
  )
  }



}

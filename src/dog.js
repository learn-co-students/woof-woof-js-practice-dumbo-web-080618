class Dog {
  constructor(name, isGoodDog, image) {
    this.name = name
    this.isGoodDog = isGoodDog
    this.image = image
  }

  static dogSpan(dogObj) {
    let span = document.createElement("span")
    span.innerText = `${dogObj.name}`
    return span
  }

  static appendDogSpan(dogObj, adapter1) {
    let navBar = document.querySelector("#dog-bar")
    let span = this.dogSpan(dogObj)
    navBar.append(span)
    span.addEventListener("click", ()=>{
      this.showDoggo(dogObj, adapter1)
    })
  }

  static showDoggo(dogObj, adapter1) {
    let adapter = adapter1
    let dogInfo = document.querySelector("#dog-info")
    dogInfo.innerHTML = (`<img src=${dogObj.image}> <h2>${dogObj.name}</h2> <button>${dogObj.isGoodDog ? "Good" : "Bad"} Dog!</button>`)
    let isGoodDogButton = dogInfo.querySelector("button")
    isGoodDogButton.addEventListener('click', () => {
      let data = {"isGoodDog": !dogObj.isGoodDog}
      let id = dogObj.id
      debugger
      adapter.patchDoggo(id, data).then((doggo)=>{
        this.showDoggo(doggo)
      })


    })
  }


}

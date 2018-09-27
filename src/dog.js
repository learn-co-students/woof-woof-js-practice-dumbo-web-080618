class Dog{
  constructor(dog){
    this.id = dog.id
    this.name = dog.name
    this.isGoodDog = dog.isGoodDog
    this.image = dog.image
  }

  renderDog(){
    let span = document.createElement('span')
    const dogBar = document.querySelector("#dog-bar")
    span.innerText = this.name
    dogBar.appendChild(span)
    span.addEventListener('click', (e) => {
      this.showDog()
    })
  }

  showDog(){
    const dogInfo = document.querySelector('#dog-info')
    let text = `
    <img src=${this.image}>
    <h2>${this.name}</h2>
    <button>${this.isGoodDog? "Good":"Bad"} Dog</button>
    `
    dogInfo.innerHTML = text;
    dogInfo.querySelector("button").addEventListener('click', (e) => {
      this.toggleDog()
      let button = e.target
      button.innerHTML = `${this.isGoodDog? "Good":"Bad"} Dog`
    })
  }

  toggleDog(){
    const URL = "http://localhost:3000/pups"
    let adapter = new Adapter(URL)
    this.isGoodDog = !this.isGoodDog
    adapter.patchDog(this.id, {"isGoodDog" : this.isGoodDog})
  }
}

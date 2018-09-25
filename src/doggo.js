class Doggo {
  constructor(dog) {
    this.name = dog.name
    this.isGoodDog = dog.isGoodDog
    this.image = dog.image
    this.id = dog.id
  }

  span() {
    const dogSpan = document.createElement('span')
    dogSpan.innerText = this.name
    dogSpan.addEventListener('click', () => this.renderPupInfo())
    return dogSpan
  }

  renderSpan() {
    let btn = document.querySelector("#filter-div button")
    const dogBar = document.querySelector('#dog-bar')
    dogBar.appendChild(this.span())
  }

  renderPupInfo() {
    const dogInfo = document.querySelector('#dog-info')
    // debugger
    dogInfo.innerHTML =
    `<img src=${this.image}>
    <h2>${this.name}</h2>
    <button>${this.isGoodDog ? "Good" : "Bad"} Dog!</button>`

    const button = dogInfo.querySelector('button')
    button.addEventListener('click', (e) =>
    this.toggleButton(e))
  }

  toggleButton(e) {
    this.isGoodDog = !this.isGoodDog
    let dogObj = {isGoodDog: this.isGoodDog}
    let newAdapt = new Adapter
    newAdapt.updateDoggo(this.id ,dogObj)
    this.renderPupInfo()
  }
}

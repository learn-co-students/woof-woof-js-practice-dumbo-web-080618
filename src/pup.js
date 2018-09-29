class Pup {
  constructor(dog, adapter){
    this.id = dog.id
    this.image = dog.image
    this.isGoodDog = dog.isGoodDog
    this.name = dog.name
    this.adapter = adapter
    this.renderInfo = this.renderInfo.bind(this)
  }

  getSpan(){
    const dogSpan = document.createElement('span')
    dogSpan.innerText = this.name
    dogSpan.addEventListener('click', this.renderInfo)
    return dogSpan
  }

  renderSpan(){
    const dogBar = document.querySelector('#dog-bar')
    const dogSpan = this.getSpan()
    dogBar.appendChild(dogSpan)
  }
  

  renderInfo() {
    const dogCard = document.querySelector('#dog-info')
    dogCard.innerHTML = `<img src=${this.image}>
    <h2>${this.name}</h2><button>${this.isGoodDog ? "Good" : "Bad"} Dog!</button> `
    const button = dogCard.querySelector('button')
    button.addEventListener('click', (e) => this.toggleGoodness(e))
  }

  toggleGoodness(e){
    e.preventDefault()
    this.isGoodDog = ! this.isGoodDog
    this.adapter.patchADog(this.id, this)
    this.renderInfo()
  }
}
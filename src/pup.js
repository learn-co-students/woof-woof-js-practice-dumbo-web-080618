//put anything that deals with pup here include creating html tags
class Pup{
  constructor(dog, adapter){//name, isGoodDog, image//or class dog
    this.name = dog.name
    this.isGoodDog = dog.isGoodDog
    this.image = dog.image
    this.id = dog.id
    this.adapter = adapter;
    // this.renderPupInfo = dog.renderPupInfo()
  }

  span() {
    const dogSpan = document.createElement('span');
    dogSpan.innerText = this.name;

    dogSpan.addEventListener("click", () => this.renderPupInfo())

    return dogSpan;
  }

  renderSpan() {
    const dogBar = document.querySelector('#dog-bar');
    // const dogSpan = document.createElement('span');
    // dogSpan.innerText = this.name move to span
    // dogBar.append(dogSpan)
    dogBar.append(this.span())
  }

  renderPupInfo(){
    const dogInfo = document.querySelector('#dog-info');
    //innerHTML Warning: any eventlister that deals with this might disappear
    dogInfo.innerHTML = `
      <img src=${this.image}>
      <h2>${this.name}</h2>
      <button>${this.isGoodDog ? "Good" : "Bad"} Dog!</button>
      `
      const button = dogInfo.querySelector('button');
      button.addEventListener("click", () => this.toggleButton())
  }

  toggleButton(){
    this.isGoodDog = !this.isGoodDog;
    this.renderPupInfo();
    this.adapter.makePatchRequest(this.id, this.isGoodDog);
  }

}

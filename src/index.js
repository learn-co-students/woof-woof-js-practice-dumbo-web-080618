/*global Adapter, Pup*/
const URL = 'http://localhost:3000/pups'

document.addEventListener("DOMContentLoaded", () => {

  const adapter = new Adapter(URL)

  // const dogBar = document.querySelector('#dog-bar'); move to pup.js
  // fetch(URL).then(res => res.json()) move to adapter.js
  const dogBar = document.querySelector('#dog-bar');
  const pupFilter = document.querySelector('#good-dog-filter')
  let onOrOff = pupFilter.innerHTML.split(": ")[1]

  adapter.getPups().then(pupList => {
    pupList.forEach(pup => {
      // const dogSpan = document.createElement('span')
      // dogSpan.innerText = pup.name
      // dogBar.append(dogSpan) all above move to pup.js
      const pupObj = new Pup(pup, adapter)
      pupObj.renderSpan()
    })
  })
  pupFilter.addEventListener("click", ()=>{
    if (onOrOff == "ON"){
      pupFilter.innerHTML = "Filter good dogs: OFF"
      onOrOff = "OFF";
      dogBar.innerHTML = "";
      adapter.getPups().then(pupList => {
        pupList.forEach(pup => {
          // const dogSpan = document.createElement('span')
          // dogSpan.innerText = pup.name
          // dogBar.append(dogSpan) all above move to pup.js
          const pupObj = new Pup(pup, adapter)
          pupObj.renderSpan()
        })
      })
    }
    else{
      pupFilter.innerHTML = "Filter good dogs: ON"
      onOrOff = "ON"
      dogBar.innerHTML = "";
      adapter.getGoodPups().then(pupList => {
        pupList.forEach(pup => {
          // const dogSpan = document.createElement('span')
          // dogSpan.innerText = pup.name
          // dogBar.append(dogSpan) all above move to pup.js
          const pupObj = new Pup(pup, adapter)
          pupObj.renderSpan()
        })
      })
    }
  })
})

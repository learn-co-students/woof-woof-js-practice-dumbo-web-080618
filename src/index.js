document.addEventListener('DOMContentLoaded', () => {
  const URL = "http://localhost:3000/pups"
  const dogBar = document.querySelector("#dog-bar")
  const dogInfo = document.querySelector('#dog-info')
  const filterBtn = document.querySelector("#good-dog-filter")
  let filterOn =  false

  let adapter = new Adapter(URL)
  adapter.getDogs()
    .then(dogs => {
      dogs.forEach((dogObj) => {
        let dog = new Dog(dogObj)
        dog.renderDog();
      })
    })

  filterBtn.addEventListener('click', (e) => {
    filterOn = !filterOn
    filterDogs(e)
  })

  document.addEventListener('click', (e) => {
    if (filterOn){
      adapter.getDogs()
        .then(unfilteredDogs => {
          let dogs = unfilteredDogs.filter(dog => dog.isGoodDog)
          dogBar.innerHTML = ''
          dogs.forEach((dogObj) => {
            let dog = new Dog(dogObj)
            dog.renderDog();
          })
        })
    }
    else{
      adapter.getDogs()
        .then(dogs => {
          dogBar.innerHTML = ''
          dogs.forEach((dogObj) => {
            let dog = new Dog(dogObj)
            dog.renderDog();
          })
        })
    }
  })

  function filterDogs(e){
    let button = e.target
    button.innerHTML = `Filter good dogs: ${filterOn? "ON":"OFF"}`

    if (filterOn){
      adapter.getDogs()
        .then(unfilteredDogs => {
          let dogs = unfilteredDogs.filter(dog => dog.isGoodDog)
          dogBar.innerHTML = ''
          dogs.forEach((dogObj) => {
            let dog = new Dog(dogObj)
            dog.renderDog();
          })
        })
    }
    else{
      adapter.getDogs()
        .then(dogs => {
          dogBar.innerHTML = ''
          dogs.forEach((dogObj) => {
            let dog = new Dog(dogObj)
            dog.renderDog();
          })
        })
    }
  }


})

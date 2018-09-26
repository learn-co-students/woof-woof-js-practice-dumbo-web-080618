document.addEventListener("DOMContentLoaded", ()=>{
  const URL = "http://localhost:3000/pups"
  const adapter = new Adapter(URL)
  let filterButton = document.querySelector("#good-dog-filter")

  let goodDogFilterValue = filterButton.value


  let navBar = document.querySelector("#dog-bar")
  navBar.innerHTML = ""
  filterButton.value = "true"
  adapter.getDoggos().then((doggos) => {
    doggos.forEach(function(doggo) {
      Dog.appendDogSpan(doggo, adapter)
    })
  })

  filterButton.addEventListener("click", (e)=>{
    if (filterButton.value === "false") {
      let navBar = document.querySelector("#dog-bar")
      navBar.innerHTML = ""
      filterButton.value = "true"
      adapter.getDoggos().then((doggos) => {
        doggos.forEach(function(doggo) {
          Dog.appendDogSpan(doggo, adapter)
        })
      })
    }
    else {
      console.log("x")
      let navBar = document.querySelector("#dog-bar")
      navBar.innerHTML = ""
      filterButton.value = "false"
      adapter.getGoodDoggos().then((doggos) => {
        doggos.forEach(function(doggo) {
          Dog.appendDogSpan(doggo, adapter)
        })
      })
    }
  })

// if (filterButton.value === "false") {
//     filterButton.value === "true"
//     adapter.getDoggos().then((doggos) => {
//       doggos.forEach(function(doggo) {
//         Dog.appendDogSpan(doggo)
//       })
//     })
//   }




})

/*global Adapter, Pup*/
const URL = 'http://localhost:3000/pups'

document.addEventListener('DOMContentLoaded', () =>{
  const dogBar = document.querySelector('#dog-bar')
  function renderBar(adapter) {
    dogBar.innerHTML = ""
    adapter.getDogs()
    .then(pupList => {
      // console.log(pupList)
      const dogBar = document.querySelector('#dog-bar')
      pupList.forEach((pup)=> {
        const pupObj = new Pup(pup, adapter)
        if (adapter.filterOn() && pupObj.isGoodDog || !adapter.filterOn()){
          console.log(pupObj)
        pupObj.renderSpan()
        }
      })
    })
  }

  function toggleButton(e, adapter) {
    e.preventDefault()
    adapter.toggleFilter()
    const filterDisplay = document.querySelector('#good-dog-filter')
    filterDisplay.innerText = `Filter good dogs: ${adapter.filterOn()? 'ON' :'OFF'}`
    console.log(`Pup filter on is ${adapter.filterOn()}`)
    renderBar(adapter)
  }

  const adapter = new Adapter(URL)
  const filterButton = document.querySelector('#good-dog-filter')
  filterButton.addEventListener('click', (e) => toggleButton(e, adapter))

  renderBar(adapter)
    // adapter.getDogs()
    // .then(pupList => {
    //   console.log(pupList)
    //   const dogBar = document.querySelector('#dog-bar')
    //   pupList.forEach((pup)=> {
    //     const pupObj = new Pup(pup, adapter)
    //     pupObj.renderSpan(adapter)
    //   })
    // }
    // )
})

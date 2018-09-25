document.addEventListener('DOMContentLoaded', () => {

  const url = 'http://localhost:3000/pups';
  fetchAllDogs();

  function fetchAllDogs() {
    fetch(url)
      .then(res => res.json())
      .then(res => renderDogSpans(res));
  }

  function renderDogSpans(arr) {
    let str = '';
    let dogBar = document.querySelector('#dog-bar');
    arr.forEach(dog => str += `<span data-id='${dog.id}'>${dog.name}</span>`);
    dogBar.innerHTML = str;
    dogBar.addEventListener('click', handleSpanClick);
  }

  function handleSpanClick(e) {
    // console.log(e)
    if (e.target.nodeName === 'SPAN') {
      fetchDogProfile(e.target.dataset.id);
    }
  }

  function fetchDogProfile(id) {
    let pupMainURL = url + `/${id}`;
    fetch(pupMainURL)
      .then(res => res.json())
      .then(res => renderProfile(res));
  }

  function renderProfile(dog) {
    let dogProfile = document.querySelector('#dog-info');
    dogProfile.innerHTML = '';

    let image = document.createElement('img');
    image.src = dog.image;

    let heading = document.createElement('h2');
    heading.innerText = dog.name;

    let goodButton = document.createElement('button');
    goodButton.dataset.id = dog.id;
    if (dog.isGoodDog) {
      goodButton.innerText = 'Good Dog!';
    } else {
      goodButton.innerText = 'Bad Dog';
    }

    dogProfile.append(image, heading, goodButton);

    goodButton.addEventListener('click', toggleGoodness);
  }

  function toggleGoodness(e) {
    // goodButton.dataset.id = dog.id;
    if (e.target.innerText === 'Good Dog!') {
      e.target.innerText = 'Bad Dog';
      patchDogGoodness(e.target.dataset.id, { isGoodDog: false });
    } else {
      e.target.innerText = 'Good Dog!';
      patchDogGoodness(e.target.dataset.id, { isGoodDog: true });
    }
  }

  function patchDogGoodness(id, data) {
    let pupMainURL = url + `/${id}`;
    fetch(pupMainURL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(console.log);
  }

});

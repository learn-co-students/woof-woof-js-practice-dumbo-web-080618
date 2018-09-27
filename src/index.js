document.addEventListener('DOMContentLoaded', function(){
  fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(resp => resp.forEach(function(dog){
      makeDogSpan(dog);
    }))

    function makeDogSpan(dog){
      let dogNav = document.querySelector('#dog-bar');
      let dogSpan = document.createElement('span');
      dogSpan.innerText = dog.name;
      dogSpan.dataset.id = dog.id;
      dogSpan.addEventListener('click', function(event){
        let dogId = event.target.dataset.id;
        fetch(`http://localhost:3000/pups/${dogId}`)
          .then(resp => resp.json())
          .then(resp => showDogDiv(dog))
      });
      dogNav.append(dogSpan);

    }


    function showDogDiv(dog){
      let dogDiv = document.querySelector('#dog-info');
      dogDiv.innerText = '';
      let dogImage = document.createElement('img');
      dogImage.src = dog.image;
      let dogName = document.createElement('h2');
      dogName.innerText = dog.name;
      let dogIsGood = document.createElement('button');
      dogIsGood.dataset.id = dog.id;
      dogDiv.append(dogImage, dogName, dogIsGood);

      if (dog.isGoodDog){
        dogIsGood.innerText = 'Good Dog!';
      }else{
        dogIsGood.innerText = 'Bad Dog!';
      }

      dogIsGood.addEventListener('click', function(event){
        let id = event.target.dataset.id;
        if(dogIsGood.innerText === 'Good Dog!'){
          dogIsGood.innerText = 'Bad Dog!';
          patchDogGoodnessBackEnd(id, {isGoodDog: false});

        }else{
          dogIsGood.innerText = 'Good Dog!';
          patchDogGoodnessBackEnd(id, {isGoodDog: true});
        }
      });
    }

    function patchDogGoodnessBackEnd(id, change){
      fetch(`http://localhost:3000/pups/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(change)
      })
      .then(response => response.json());
    }

})

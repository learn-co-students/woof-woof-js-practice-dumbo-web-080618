function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.querySelector('#target');
};

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
};

function increaseRankBy(num){
  let liNums = document.querySelectorAll('#app .ranked-list li');
  for(let i = 0; i < liNums.length; i++){
    liNums[i].innerHTML = parseInt(liNums[i].innerHTML) + num;
  }
}

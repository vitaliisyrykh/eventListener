'use strict';

const btn = document.querySelector('button');
const wrapper = document.querySelector('.squareWrapper');

function createDivElement(){
  const randColor = "#" + ("00" + Math.floor(Math.random()*16777215)).toString(16).substr(-6);
  const divSquere = document.createElement('div');
  divSquere.classList.add('square')
  divSquere.style.backgroundColor = randColor;
  divSquere.textContent = randColor;
  wrapper.append(divSquere);
};

btn.addEventListener('click',createDivElement);
wrapper.addEventListener('click',({target})=>{
  if(target.classList.contains('square')){
    console.log(target.style.backgroundColor);
  }return;
  
});

'use strict';

const textContainer = document.querySelector('.textContainer');
const listContainer = document.querySelector('.listContainer');
const html = document.querySelector('html');

document.addEventListener('mouseover',({target})=>{
  const closestLi = target.closest('li');
  if(closestLi){
    textContainer.textContent = closestLi.textContent;
    return
  }
  textContainer.textContent = closestLi.tagName;
});



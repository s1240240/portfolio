'use strict';
{
  //keydown
  document.addEventListener('keydown',(e) =>{
    document.querySelector('p').textContent = e.key;
  });
  //mousemove
  document.addEventListener('mousemove',(e) =>{
    document.querySelector('p').textContent = `X:${e.clientX} Y: ${e.clientY}`;
  });
}
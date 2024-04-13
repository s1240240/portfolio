'use strict';
{
  //input → text,textarea,select
  //change → radio,checkbox
  // document.querySelector('input').addEventListener('input',() =>{
  //   const pElement = document.querySelector('p');
  //   const iElement = document.querySelector('input');
  //   // pElement.textContent = iElement.value;
  //   pElement.textContent = iElement.value.length;
  // });

  document.querySelector('input').addEventListener('focus',() =>{
    document.querySelector('p').textContent = 'Englich Only!'
  });

  document.querySelector('input').addEventListener('blur',() =>{
    document.querySelector('p').textContent = '';
  });
  document.querySelector('input').focus();
}
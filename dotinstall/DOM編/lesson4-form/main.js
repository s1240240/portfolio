'use strict';
{
  //要素を新しく作る
  document.querySelector('button').addEventListener('click',() =>{
    // alert(document.querySelector('input').value);
    // alert(document.querySelector('textarea').value);
    // document.querySelector('textarea').value = '';
    // alert(document.querySelector('select').value);
    const colors = [];
    document.querySelectorAll('input').forEach((checkbox) =>{
      if(checkbox.checked ){
        colors.push(checkbox.value);
      }
    });
    alert(colors.join('-'));
  });
  console.log('Hello');
}
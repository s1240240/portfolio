'use strict';
{
  //要素を新しく作る
  document.querySelector('button').addEventListener('click',() =>{
    const liElement = document.createElement('li');
    liElement.textContent = 'Hanako';
    // document.querySelector('ul').appendChild(liElement);
    // document.querySelector('ul').insertBefore(liElement,document.querySelector('#second'))
    if(confirm('削除します。よろしいですか？')){
      document.querySelector('#second').remove();
    }
  });
  console.log('Hello');
}
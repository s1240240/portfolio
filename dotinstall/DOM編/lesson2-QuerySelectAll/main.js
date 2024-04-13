'use strict';
{
  //複数の要素を取得するときは、querySelectorAllとforEachを使用する
  document.querySelector('button').addEventListener('click',() =>{
    // document.querySelectorAll('li')[0].textContent = 'Changed!';
    // document.querySelectorAll('li')[1].textContent = 'Changed!';
    // document.querySelectorAll('li')[2].textContent = 'Changed!';
    document.querySelectorAll('.target').forEach((li) => {
      li.textContent = 'Changed!';
    });
    document.querySelector('#second').textContent = 'second';
  });
  console.log('Hello');
}
'use strict';
{
  document.querySelector('input').focus();
  //formとsubmitイベント(enterボタン発生時にも発火する)
  document.querySelector('form').addEventListener('submit',(e) =>{
    e.preventDefault();
    document.querySelector('p').textContent = document.querySelector('input').value;
  });
}
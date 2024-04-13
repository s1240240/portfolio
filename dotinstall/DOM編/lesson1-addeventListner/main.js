'use strict';
{
  //button要素セレクタを取得（ユーザーがボタンをクリックした時）
  document.querySelector('button').addEventListener('click',() =>{
    // console.log('clicked');
    //画面の本文テキストを変更する
    // document.querySelector('p').textContent = 'こんにちは';
    //本文のテキストをボタンのテキストへ変更する
    // document.querySelector('p').textContent = document.querySelector('button').textContent;
     //本文のテキストのカラーと背景カラーを変更する
    // document.querySelector('p').classList.add('pink-bg','white-color');
    //本文のテキストのボーダー線を削除する
    // document.querySelector('p').classList.remove('red-border');
    //背景色を付けたり、消したりする
    if(document.querySelector('p').classList.contains('pink-bg')){
      //true
      document.querySelector('p').classList.remove('pink-bg');
    }else{//false
      document.querySelector('p').classList.add('pink-bg');
    }
  });
  console.log('Hello');
}
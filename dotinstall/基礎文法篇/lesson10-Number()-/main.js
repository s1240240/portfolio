'use strict';
/*
数値か文字列かを確認する
*/
//数値は文字列として扱われる
console.log(50 + '20');
//入力値は文字列となる
const n = prompt('Any Number?');
//文字から数値変換はNumber()
console.log(Number(n) + 10);

'use strict';
/*
変数でのよく使われる演算
*/

//変数
let price;
//定数
const rate = 1.1;

price = 150
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);

// １円の値上がり
price = price + 1;
// price +=1;
// price ++;
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);
"use strict";
/*
for文応用
*/

//価格
let price;
//税率
const rate = 1.1;
for( let price = 150; price <=160; price++){
  console.log(`price: ${price}`);
  for( let amount = 120; amount <= 140; amount+=10){
    console.log(`amount: ${amount}`);
    console.log(price * amount * rate);
  }
}
// price = 150
// console.log(price * 120 * rate);
// console.log(price * 130 * rate);
// console.log(price * 140 * rate);

// // １円の値上がり
// price = price + 1;
// // price +=1;
// // price ++;
// console.log(price * 120 * rate);
// console.log(price * 130 * rate);
// console.log(price * 140 * rate);

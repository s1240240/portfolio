'use strict';
{
  // 引数を2倍にして返す関数
  function calcTotal(price,amount,rate = 1.1){
    return price * amount * rate;
  }
  console.log(calcTotal(100,10));
  console.log(calcTotal(150,10));
  console.log(calcTotal(200,10));
  console.log(calcTotal(120,10,1.08));
}
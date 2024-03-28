'use strict';
{
  // 引数を2倍にして返す関数
  function calcTotal(price,amount,rate = 1.1){
    // if(amount >= 100){
    //   return price * amount;
    // }else{
    //   return price * amount * rate;
    // }

    //早期リターン
    if(amount >= 100){
      return price * amount;
    }
    return price * amount * rate;
  }
  console.log(calcTotal(100,10));
  console.log(calcTotal(100,100));
}
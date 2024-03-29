"use strict";
{
  //関数式
  //  const double = function(num){
  //     return num * 2;
  //  };

  //関数式
  const double = (num) => num * 2;

  const calc = (num, func) => {
    return func(num);
  };
  console.log(double(10));
  console.log(calc(20, double));
  console.log(
    calc(40, (num) => {
      return num * 2;
    })
  );
}

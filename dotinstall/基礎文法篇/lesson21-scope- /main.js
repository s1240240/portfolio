"use strict";
let x = 10; //global scope

{
  //let x = 20; //local scope
  x = 20; //global scope
  console.log(x);
}

console.log(x);

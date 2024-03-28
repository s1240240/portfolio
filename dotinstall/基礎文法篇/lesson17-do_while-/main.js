"use strict";
/*
do-while
*/

// let command = Number(prompt("Menu 1,2,3 or exit 0"));

// while (command !== 0) {
//   console.log(`Menu ${command}: processed.`);
//   command = Number(prompt("Menu 1,2,3 or exit 0"));
// }

//do-while
let command;
do{
  command = Number(prompt("Menu 1,2,3 or exit 0"));
  if(command === 0){
    console.log(`Exit`);
  }else{
    console.log(`Menu ${command}: processed.`);
  }
} while (command !== 0);
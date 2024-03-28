"use strict";
/*
while文応用
*/

let command = Number(prompt("Menu 1,2,3 or exit 0"));

while (command !== 0) {
  console.log(`Menu ${command}: processed.`);
  command = Number(prompt("Menu 1,2,3 or exit 0"));
}

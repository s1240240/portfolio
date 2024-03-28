"use strict";
/*
テストスコアの条件分岐
*/

//入力値は文字列となる
const color = prompt("Color?");
switch (color) {
  case "赤":
    console.log("Stop!");
    break;
  case "黄":
    console.log("Attention!");
    break;
  case "青":
  case "緑":
    console.log("Go!");
    break;
  default:
    console.log("Wrong color!")
}

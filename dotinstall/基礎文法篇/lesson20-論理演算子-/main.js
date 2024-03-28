"use strict";
/*
三項演算子@yui_watanabe
*/
const english = Number(prompt("English score"));
const math = Number(prompt("Math score"));
if (!(english >= 80 && math >= 80)) {
  console.log("A");
} else {
  console.log("B");
}

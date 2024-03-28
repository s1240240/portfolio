"use strict";
/*
テストスコアの条件分岐
*/

//入力値は文字列となる
const score = Number(prompt("Score?"));
if (score >= 90) {
  console.log(score + "点はA判定!合格です！");
} else if (score < 90 && score >= 70) {
  console.log(score + "点はB判定!その調子！");
} else {
  console.log(score + "点はC判定!頑張ろう！");
}

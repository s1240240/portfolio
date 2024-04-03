'use strict';
{
  // 配列のconstは再代入可能
  // 配列をconstで宣言することで、意図せずに全く違う値を代入することを防ぐ
  const scores = [
    70,
    90,
    80,
    85,
  ];
  let sum = 0;

  scores.push(77,88);
  //全要素を出力
  //breakで途中脱出可能
  for(let i = 0; i < scores.length; i++){
    console.log(scores[i]);
  }
  //途中でループ脱出不可
  scores.forEach((score,index) =>{
    console.log(`score:${score} index:${index}`);
    sum += score;
  });
  //合計と平均を出力
  console.log(`Sum:${sum}`);
  console.log(`Average:${sum / scores.length}`);
}
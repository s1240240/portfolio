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

  
  console.log(scores[2]);//80
  console.log(scores.length);//4
  scores[1] = 95;
  console.log(scores);//70,95,80,85
  // 末尾と先頭の要素を追加
  scores.push(65,72);
  console.log(scores);
  //pushとpop(末尾)
  //shitとunshift（先頭）
}
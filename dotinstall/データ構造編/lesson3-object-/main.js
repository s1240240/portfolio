"use strict";
{
  //オブジェクト宣言
  const scores = {
    math: 80,
    english: 90,
  };

  console.log(scores);
  scores.math = 88;
  console.log(scores.math);
  console.log(scores.english);

  //プロパティを追加
  scores.physics = 70;
  console.log(scores.physics);

  //プロパティを削除
  // delete scores.english;
  // console.log(scores);

  //一覧と合計と平均
  //object→配列に変換
  const entries = Object.entries(scores);
  let sum = 0;
  // console.log(entries);
  entries.forEach((prop) => {
    // console.log(prop);
    console.log(`${prop[0]} : ${prop[1]}`);
    sum += prop[1];
  });
  console.log(`SUM: ${sum}`);
  console.log(`ANG: ${sum / entries.length}`);
}

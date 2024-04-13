'use strict';
{
  //分を時間に変換
  //ceilは切り上げ
  //floorは切り下げ
  //roundは四捨五入
  // const n = Number(prompt('Minutes?'));
  // const hour = Math.floor(n / 60);
  // const min = n % 60;
  // console.log(`${hour}時間${min}分`);
  //円からドルへ為替変換
  //1ドル＝150円（円安）
  // const yen = Number(prompt('yen?'));
  // //小数点以下の桁数を指定(戻り値はString)
  // const dollar = Number.parseFloat(yen / 150).toFixed(3);
  // //カンマ区切り(Numberで数値にする)
  // console.log(`${yen}円→${Number(dollar).toLocaleString()}ドル`);

  //特定の処理を入力数値だけ繰り返す
  // const n = Number(prompt('Count'));
  // for( let i = 0 ; i < n ; i++){
  //   if(i % 3 === 0){
  //     console.log(`---item ${i}---`);
  //   }else{
  //     console.log(`===item ${i}===`);
  //   }
  // }
  //乱数生成
  //0以上max未満の数値を生成
  // function getRandomInt(max){
  //   return Math.floor(Math.random() * ( max + 1))
  // }
  // //呼び出し
  // for( let i = 0 ; i < 10 ; i++){
  //   const n = getRandomInt(5) + 1;
  //   console.log(`i:${i},n:${n}`);
  // }

  //テストスコア配列
  const scores =[70,80,40,50,100];
  //max関数を使用する方法
  const scoreMax = Math.max(...scores);
  const scoreMin = Math.min(...scores);
  console.log(`最高スコアは${scoreMax}点です！`);
  console.log(`最高スコアは${scoreMin}点です！`);
  //forEach関数を使用する方法
  let maxScore = 0;
  scores.forEach((score) =>{
    if(score > maxScore){
      maxScore = score;
    }
  });
  console.log(`最高スコアは${scoreMax}点です！`);
}
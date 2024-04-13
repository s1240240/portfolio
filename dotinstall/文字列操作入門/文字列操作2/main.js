'use strict';
{
  const counts = [6,12,8,15];
  counts.forEach((count) => {
    //part1
    //連結用変数
    // let bar = '';
    // for(let i = 0; i < count; i++){
    //   //連結
    //   bar += '*';
    // };
    //part2
    //特定の回数だけ文字列の連結を繰り返す
    const bar = '*'.repeat(count);
    //2桁分にする、満たない場合は先頭を０で補完する
    const label = String(count).padStart(2,'0');
    // console.log(bar);
    console.log(`${label}: ${bar}`);
  });
}
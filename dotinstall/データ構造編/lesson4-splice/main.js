"use strict";
{
  //配列宣言
  const scores = [70,90,80,85];
  const names = ['Taro','Jiro','Saburo'];
  const name = 'Taro|Jiro|Saburo';
  //要素の追加
  scores.splice(2,0,77,88);
  //70,90,77,88,80,85

  //要素の削除
  const deleted = scores.splice(3,1);
  //88
  //70,90,77,80,85

  //要素の追加と削除
  scores.splice(2,2,30);
  //70,90,30,85
  console.log(scores);
  console.log(deleted);

  //join
  console.log(names.join('|'));
  console.log(names.join(''));
  console.log(names.join(','));
  //split
  console.log(name.split('|'));

  const costs = [50,500,1000];
  //map
  // const prices =[];
  // costs.forEach((costs) => {
  //   prices.push(costs * 1.1);//末尾に要素を追加する
  // });
  // console.log(prices);
  //map
  const prices = costs.map((cost) =>{
    return cost * 1.1
  });
  console.log(prices);

  // filter
  // const prices2 = [100,150,200];
  // const item = [];
  // prices2.forEach((price) => {
  //   if(price >= 150){
  //     item.push(price);
  //   };
  // });
  // console.log(item);

  //filter
  const prices2 = [100,150,200];
  const item = prices2.filter((price) => {
    return price >= 150;
  });
  console.log(item);
  //手動
  // const scores2 = [70,90,80,85];
  // const first = scores2[0];
  // const second = scores2[1];
  // const third = scores2[2];
  // const forth = scores2[3];
  //分割代入
  //scoresの各要素を取り出し、定数に代入
  //[]は分割代入の記号
  const scores2 = [70,90,80,85];
  const [first,second,third,forth] = scores2;
  console.log(scores2);
  console.log(`1番目：${first}\n2番目：${second}\n3番目：${third}\n4番目：${forth}\n`);
  //分割代入で値を入れ替える
  let start = 'Tokyo';
  let goal = 'Nagoya';
  let tmp = '';
  //手動
  // tmp = start;//Tokyo
  // start = goal;//Nagoya
  // goal = tmp;//Tokyo

  //分割代入
  [goal,start] = [start,goal];
  


  console.log(`start:${start} goal:${goal}`);
}
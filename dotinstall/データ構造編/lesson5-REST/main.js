"use strict";
{
  //配列宣言
  const scores = [70,90,80,85];
  //レスト構文(値を受け取り、まとめる＝左辺)
  const [first,...others] = scores;
  console.log(`first:${first}\nothers:${others}`);

  const addScores = [77,88];
  //スプレッド構文（値を受け取り、広げる＝右辺）
  const scores2 = [70,90,80,85,...addScores];
  //レスト構文
  const [second,...others2] = scores2
  console.log(`second:${second}\nothers:${others2}`);
  console.log(second);
  console.log(others2);

  //オブジェクト操作
  const addScores2 ={
    Shiro:80,
    Goro:90,
  };
  const scores3 = {
    Taro:60,
    Jiro:70,
    Saburo:80,
  };
  // const {Taro,Jiro,Saburo} = scores3;
  // console.log(Taro);
  // console.log(Jiro);
  // console.log(Saburo);

  const{Taro,...Other3} = scores3;
  console.log(Taro);
  console.log(Other3);

  const joinScores = {...scores3,...addScores2};
  console.log(joinScores);
}
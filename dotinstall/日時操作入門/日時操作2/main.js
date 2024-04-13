'use strict';
{
  //2000 4 11
  const date = new Date(2000,3,11);
  console.log(date);
  console.log(date.toLocaleString());
  
  //UTC(世界標準時刻)
  //1970/01/01 00:00:00(Unix開発年代)
  //Unix Timestamp
  console.log(date.getTime());
  //1000ミリ秒=1秒をたす
  const date2 = new Date(date.getTime() + 1000);
  //dateの1秒後の時刻になっているか確認
  console.log(date2);

  console.log('=======');
  //日時の差を埋める
  //2023 6 10
  const Update = new Date(2024,3,1);
  console.log(Update.toLocaleString());
  //現在時刻との差
  // const diffDate = new Date().getTime() - Update.getTime();
  const diffDate = Date.now() - Update.getTime();//書き方に癖あり注意
  console.log(diffDate);//ミリ秒
  //1秒＝1000ミリ秒
  //1分＝60秒
  //1時間=60分
  //1日＝24時間
  //取得したいのは何日か
  const days =Math.floor(diffDate /1000/60/60/24);
  console.log(days);//ミリ秒

  console.log('=======');
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days_tmp = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dateJun = new Date(2001,0,1);
  console.log(dateJun.toLocaleString());
  //January 01,Monday
  const month = months[dateJun.getMonth()];//0から始まる
  const day =String( dateJun.getDate()).padStart(2,'0');
  const dayOfWeek = days_tmp[dateJun.getDay()];//0から始まる
  console.log(`月：${month},日：${day},曜日：${dayOfWeek}`);

}
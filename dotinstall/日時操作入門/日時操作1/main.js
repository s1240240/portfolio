'use strict';
{
  const date = new Date();
  console.log(date.toLocaleString());
  //年・月・時間
  //年
  console.log(date.getFullYear());
  //0から始まる 0→1月,
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
  //曜日 0 →日曜日
  console.log(date.getDay());

  //2000 4 11
  const date2 = new Date(2000,3,11);
  const dateBackup = date2;//date2のアドレスを返す
  const dateBackup2 = new Date(date2.getFullYear(),date2.getMonth(),date2.getDate());//date2のアドレスを返す
  const dateBackup3 = new Date(date2.getTime());//
  
  console.log(date2.toLocaleString());

  //日時更新
  //日時はオブジェクトのため、constでOK
  date2.setDate(23);
  console.log(date2.toLocaleString());
  // console.log(dateBackup.toLocaleString());//23日に更新されてしまう
  // console.log(dateBackup2.toLocaleString());//BACKUP
  console.log(dateBackup3.toLocaleString());//BACKUP
  //100日後のデータを作成
  // date2.setDate(date2.getDate() + 100);
  // console.log(date2.toLocaleString());

  //2000 2 ??(閏年を考慮)
  //日の0は前月の末日を示す
  // const date3 = new Date(2000,2,0);//0を渡す
  // console.log(date3.toLocaleString());
}
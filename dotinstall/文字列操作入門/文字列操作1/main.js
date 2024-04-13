'use strict';
{
//文字列アクセス
//   const str = prompt('Any Message?');
//   console.log(str);
//   console.log(`文字数は${str.length}です。`);
//   //配列ではない（読み取り専用かつpush等の関数は使用不可）
//   console.log(`最初の文字は${str[0]}です。`);

//文字列整形
  // const str = prompt('Name?');
  // // if(str.toLowerCase() === 'taro'){//小文字変換
  // if(str.toUpperCase().trim() === 'TARO'){//大文字変換//前後空白除去
  //   console.log('Correct!');
  // }else{
  //   console.log('Wrong!');
  // }

//複数文字列の処理
  const emails =[
    'taro@example.com',
    'jiro@example.com',
    'kojiro@example.com',
  ];

  emails.forEach((email) => {
    //taroを含む文字列を抽出する
    // if(email.includes('taro')){
    //   console.log(email);
    // }
    //指定した文字列が最初に出現するインデックスを返す
    // if(email.indexOf('taro') === 0){
    //   console.log(email);
    // }
    //文字列が引数で指定された文字列で始まるかを判定してtrueかfalseを返す
    // if(email.startsWith('taro') ){
    //   console.log(email);
    // }

    //文字列の一部を切り出す
    const loc = email.indexOf('@');
    //sliceは配列の一部をstartからendまでの範囲で抜き出します part1
    console.log(email.slice(0,loc));
    //part2
    // console.log(email.substring(0,loc));
    //part3 文字列置換
    console.log(email.replace('@example.com',''));
    //part4 @を区切り文字として０番目の要素を抜き出す
    const item = email.split('@');
    console.log(item[0]);
  });
}
"use strict";
{
  //変数宣言
  let num =10;
  const numBackup = num;
  num = 99;
  console.log(num); //99
  console.log(numBackup); //10

  //配列のバックアップ
  const nums = [10,20,30];
  const numsBackup = nums;
  nums[0] = 99;

  console.log(nums); //99,20,30
  console.log(numsBackup); //10,20,30とはならない

  const nums2 = [10,20,30];
  //スプレッド構文
  const numsBackup2 = [...nums2];
  nums2[0] = 99;
  console.log(nums2); //99,20,30
  console.log(numsBackup2); //10,20,30
}
// const fs = require("fs");
// let stdin = process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `2`;

let input = require("fs").readFileSync("./input.txt").toString().split(" ");

// console.log("2*1=2");
// console.log("2*2=4");
// console.log("2*3=6");
// console.log("2*4=8");
// console.log("2*5=10");
// console.log("2*6=12");
// console.log("2*7=14");
// console.log("2*8=16");
// console.log("2*9=18");

//입력값 n을 이용하여 n*1 ~ n*9까지 출력.
//1<=  i <= 10
//2를 n에 담고, 1를 i에 담고 i는 1보다 크거나 같고 10보다 작거나 같다.
//n*i=n*i

let n = Number(input[0]);

// let sum = 0;

// for (let value = 1; value <= 10; value++) {
//   sum = sum + value;
// }
// console.log(sum);
//i는 1이고 n은 1보다 크거나 같고 10보다 작거나 같다
for (let i = 1; i <= 9; i++) {
  let sum = `${n} * ${i} = ${n * i}`;
  console.log(sum);
}

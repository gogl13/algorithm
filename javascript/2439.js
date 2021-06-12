let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

//x=줄

//    * 공백4 별1 별1=1번쨰 줄 / 공백의 갯수 = 입력값 - 별의 갯수
//   ** 공백3 별2 별1=2번쨰 줄 / 별의 갯수 = x번째 줄
//  *** 공백2 별3 별1=3번쨰 줄
// **** 공백1 별4 별1=4번쨰 줄
//***** 공백0 별5 별1=5번쨰 줄

//입력값을 정의하고
//첫번쨰 줄부터 시작해야하니까 x는 1이되어야한다.
//공백의 갯수만큼 구하고 별의 갯수만큼 출력하기위하여 공백.별의 갯수를 구함.
//별의 갯수 = x번째 줄
//공백의 갯수 = 입력값 - 별의 갯수
//출력값 = 별의 갯수 + 공백의 갯수

let n = Number(input[0]);
let x = 1;

for (x = 1; x <= n; x++) {
  let star = x;
  let space = n - star;

  let printString = "";

  for (let i = 0; i < space; i++) printString += " ";
  for (let i = 0; i < star; i++) printString += "*";
  console.log(printString);
}

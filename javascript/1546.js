let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString();

input = input.split("\n");
//[3], [40, 80, 60]
//input[1].split(' ')
let n = input[0];
let list = input[1].split(" ");
let m = 0;

for (let i = 0; i < n; i++) {
  let value = list;
  if (value > m) {
    m = value;
  }
  console.log("m:", m);
  console.log("value:", value);
}
console.log(m);

//2 모든 점수를 점수/M*100으로 고쳤다.
//3 세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.

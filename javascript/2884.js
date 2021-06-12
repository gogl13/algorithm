let input = require("fs").readFileSync("./input.txt").toString().split(" ");
// let input = require("fs").readFileSync().toString().split("\n");

//b가 0보다 작으면 b + 15를 b에 담고, a-1을 a에 담는다.
//b가 0보다 작지않으면 b - 45를 b에 담는다.
//a가 0보다 작으면 23을 a에 담는다.
//a와 b를 출력한다.

let a = Number(input[0]);
let b = Number(input[1]);

if (b < 45) {
  b = b + 15;
  a = a - 1;
} else {
  b = b - 45;
}
if (a < 0) {
  a = 23;
}

console.log(a, b);

let input = require("fs").readFileSync("./input.txt").toString().split(" ");
//let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let max = Number(input[0]);
let answer = "";

for (let a = 1; a <= max; a++) {
  let num = input[a].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(answer);

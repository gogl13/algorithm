let input = require("fs").readFileSync("./input.txt").toString().split("\n");

// let input = require("fs").readFileSync("/dev/stdin").toString();

let answer = "";

for (let a = 1; a <= input; a++) {
  answer += a + "\n";
}
console.log(answer);

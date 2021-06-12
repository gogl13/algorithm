// let input = require("fs").readFileSync("./input.txt").toString().split("\n");

// let input = require("fs").readFileSync("/dev/stdin").toString();

let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let answer = "";

for (let i = input; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);

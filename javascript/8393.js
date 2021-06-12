let input = require("fs").readFileSync("./input.txt").toString().split(" ");

// let input = require("fs").readFileSync("/dev/stdin").toString().split(' ');

let n = Number(input[0]);

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

//
//

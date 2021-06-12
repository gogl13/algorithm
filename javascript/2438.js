let input = require("fs").readFileSync("./input.txt").toString().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let star = "";

for (a = 1; a <= input; a++) {
  star += "*";
  console.log(star);
}

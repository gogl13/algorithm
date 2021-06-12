// let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const A = Number(input[0]);

if (100 <= A) {
  console.log("A");
} else if (90 <= A) {
  console.log("B");
} else if (80 <= A) {
  console.log("C");
} else if (70 <= A) {
  console.log("D");
} else {
  console.log("F");
}

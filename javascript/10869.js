let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let readlineIdx = 0;
const readInput = () => input[readlineIdx++];

function main() {
  let [a, b] = readInput().split(" ");
  a = Number(a);
  b = Number(b);
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(parseInt(a / b));
  console.log(a % b);
}

main();

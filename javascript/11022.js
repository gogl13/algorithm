// let input = require("fs").readFileSync("./input.txt").toString().split("\n");
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let a = 1; a <= input[0]; a++) {
  let number = input[a].split(" ");

  const num1 = Number(number[0]);
  const num2 = Number(number[1]);

  console.log(`Case #${a}: ${num1} + ${num2} = ${num1 + num2}`);
}

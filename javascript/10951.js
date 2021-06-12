// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

for (let a = 0; a < input.length - 1; a++) {
  let number = input[a].split(" ");

  console.log(Number(number[0]) + Number(number[1]));
}

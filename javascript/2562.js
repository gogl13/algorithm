let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString();

input = input.split("\n");

let maxvalue = -100;
let position = 0;

for (let i = 0; i < 9; i++) {
  let value = Number(input[i]);
  if (value > maxvalue) {
    maxvalue = value; //조건이 충족한다면 maxvalue에 value를 넣는다.
    position = i + 1;
  }
}

console.log(`${maxvalue}\n${position}`);

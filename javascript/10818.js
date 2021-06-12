let input = require("fs").readFileSync("./input.txt").toString();

//5
//20 10 35 30 7
// let input = require("fs").readFileSync("/dev/stdin").toString().split(' ');

input = input.split("\n");
//input = 5, 20, 10 ,35, 30, 7
let n = Number(input[0]);
let list = input[1].split(" ");

let minvalue = 1000000;
let maxvalue = -1000000;

for (let i = 0; i < n; i++) {
  let value = Number(list[i]);
  if (value < minvalue) {
    minvalue = value;
  }
  if (value > maxvalue) {
    maxvalue = value;
  }
}

console.log(`${minvalue} ${maxvalue}`);
//  value가 minvalue보다 작으면 minvalue에 value를 넣는다.

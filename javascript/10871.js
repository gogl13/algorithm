let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./input.txt").toString();

//10 5
//1 10 4 9 2 3 8 5 7 6

input = input.split("\n");
// ['10 5', '1 4 9 2 3 8 5 7 1 1 1']

let n = Number(input[0].split(" ")[0]); //'10 5' >>['10', '5']>> '10'
let x = Number(input[0].split(" ")[1]);
let list = input[1].split(" "); //'1 10 4 9 2 3 8 5 7 6' >> ['1', '10', '4', '9', '2', '3', '8', '5', '7', '6']

for (let i = 0; i < n; i++) {
  //  let value = list[0]; // ['1', '4', '9', '2', '3', '8', '5', '7', '1' ] >>
  let value = Number(list[i]);

  if (value < x) {
    // console.log(`${value} `);
    process.stdout.write(`${value} `);
    // console.log(value + " ")
  }
}

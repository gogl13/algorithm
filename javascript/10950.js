let input = require("fs").readFileSync("./input.txt").toString().split("\n");

//테스트의 갯수는 n이다.
//a 와 b를 더한다.

/*5 , 1 1, 2 2, 3 3, 4 4, 5 5 */

// let test = "100 200";
// let splitinput = test.split(" "); // ['100', '100']

// let a = Number(splitinput[0]);
// let b = Number(splitinput[1]);

// console.log(a + b);

let n = Number(input[0]);
//input: [ '5', '1 1', '2 2', '3 3', '4 4', '5 5' ]
for (i = 1; i <= n; i++) {
  let splitinput = input[i].split(" ");
  let a = Number(splitinput[0]);
  let b = Number(splitinput[1]);
  console.log(a + b);
}

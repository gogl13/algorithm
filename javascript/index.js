let sum; //섬이라는 공간을 확보
let i = 0;

sum = 0; //섬에 0을 처음 넣음
while (i <= 10) {
  //~하는 동안에
  sum = sum + 1;
  i = i + 1;
  console.log("i:", i, "sum:", sum);
}
console.log(sum);

console.log(sum); //0
sum = sum + 1;

console.log(sum); //1
sum = sum + 2;

console.log(sum); //3
sum = sum + 3;

console.log(sum); //6
sum = sum + 4;

console.log(sum); //
sum = sum + 5;

console.log(sum); //
sum = sum + 6;

console.log(sum); //
sum = sum + 7;

console.log(sum); //
sum = sum + 8;

console.log(sum); //
sum = sum + 9;

console.log(sum); //
sum = sum + 10;

console.log("결과", sum);

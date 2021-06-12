let sum = 0;
let value = 0; //while문에 조건을 맞출 변수 && 하나씩 숫자가 증가하는것을 나타내려함.
//sum = 66
//value = 11
while (value < 10) {
  value += 1;
  sum = value + sum;

  console.log(sum);
}

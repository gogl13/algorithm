console.log("run");

//first를 자바스크립트가 알아야함
//

//1.
const firstElement = document.querySelector(".first");
console.log("firstElement : ", firstElement);

//2.
firstElement.addEventListener("click", function (event) {
  firstElement.classList.toggle("test");
});

//3.

const openElement = document.querySelector(".open");
const modalElement = document.querySelector(".modal");
const exitElement = document.querySelector(".exit");

openElement.addEventListener("click", function (event) {
  modalElement.classList.remove("closed");
});
exitElement.addEventListener("click", function (event) {
  modalElement.classList.add("closed");
});

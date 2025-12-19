// function3.js 1219 //

//익명함수(p.575~)//
//함수 표현식//   <- 함수선언과 다른점을 기억하자.
const sum = function (a, b) {
  return a + b;
}
console.log(sum);
let result = sum(2, 3);
console.log(result)

const plus = sum;
plus(3, 4);
console.log(plus);

//즉시실행함수(p.576)
result = (function (x, y) {
  return x > y ? x : y;
})(45, 29);
console.log(result);

//화살표함수 : (매개변수) => {기능구현}
// const hi = (name) => {
//   return `hello!  ${name}`;
// }
// console.log(hi('suya'))

//간략히도 가능(매개변수 갯수에 따라)//
const hi = (name) => `hello!  ${name}`;
console.log(hi('suya'))
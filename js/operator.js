// operator.js
console.log('test')
//비교연산자 실습 자료
let result = 10 > 5;
console.log(result);
result = 10==11;
console.log(result);
let num1 = 10;
let num2 = 25;
result = num1 < num2;
console.log(result);
result = num1 >= num2;
console.log(result);
let str1 = '10';
result = num1 == str1;
console.log(result);
result = num1 === str1; // "===" => 문자열 숫자열 데이터타입까지 확인함
console.log(result);
srt1 = 10;
result = num1 != num2;
console.log(result);

//논리연산자
result = num1 > num2 || num1 == str1;  //OR연산자
console.log(result);
result = num1 > num2 && num1 == str1;  //AND연산자
console.log(result);
result = !(num1 > num2 && num1 == str1); //NOT연산자
console.log(result);
result = !result;
console.log(result);

console.log('apple'.charCodeAt(0));
console.log('mango'.charCodeAt(1));
console.log('address'.charCodeAt(1));
console.log('address'.charCodeAt(2));

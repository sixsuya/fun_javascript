// 추가설치 파일 : beautify (단축키 ctrl + shift + f)
// push 할때 => 1. git add .   2. git commit -m "message"   3. git push -u orgin main

// 변수선언, 연산자 활용
// 이름저장하기 위한 변수 => 이름 저장.
let myName = 'sixsuya';
myName = '육성수';
// 혈액형
let bloodType = 'B+';
// 키 선언
let myHeight = 162;
// 성인, 미성년 구분.
let isAdult = true; // false

let sum = 10 + 20;
console.log('sum의 값은 ' + sum + ' 입니다.');

// 내 이름은 육성수 입니다.
console.log('내 이름은 ' + myName + ' 입니다.')

// 할당연산자 : +, - , *, /, % 
let num1 = 10;
let num2 = 5;
let result = 0;
console.log('현재 result의 값은 ' + result); //코드 순차적으로 실행함에 따라 result 값이 다름
result = num1 + num2;
console.log('현재 result의 값은 ' + result);
result = num1 - num2;
console.log('현재 result의 값은 ' + result);
result = num1 * num2;
console.log('현재 result의 값은 ' + result);
result = num1 / num2;
console.log('현재 result의 값은 ' + result);
result = (result + num1) % num2;
console.log('현재 result의 값은 ' + result);
result = result + num1 % num2;
console.log('현재 result의 값은 ' + result);
result = result + num1 % num2;
console.log('현재 result의 값은 ' + result);
result++; // result = result + 1;
console.log('현재 result의 값은 ' + result);
result++; // 반복하면 중첩되어 더해짐
console.log('현재 result의 값은 ' + result);
result += 1; // "result = result + 1" 과 같은 의미임  
console.log('현재 result의 값은 ' + result);
result += 4; // 숫자 바꿔도 적용됨
console.log('현재 result의 값은 ' + result);
result *= 2; // 연산자 바꿔도 적용됨
console.log('현재 result의 값은 ' + result);
result %= 4;
console.log('현재 result의 값은 ' + result);
result = result < 10;
console.log('현재 result의 값은 ' + result);
result += 3; // 상기 비교연산에서 true 값이므로 true + 3 으로 인식함. 
// true는 원래 다른 프로그램에서는 연산 안됨(Nan값 출력함)
// 자바스크립트는 true를 1로, false를 0으로 인식하여 연산을 진행함
console.log('현재 result의 값은 ' + result);
result = 'hello' * 4; //계산할수 없는 값은 자바스크립트도 NaN으로 출력함
console.log('현재 result의 값은 ' + result);
result = result - 3; //이미 NaN 판정을 받은 값은 추가 연산도 NaN으로 출력
console.log('현재 result의 값은 ' + result);
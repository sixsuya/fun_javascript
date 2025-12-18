// // fuction.js

// 두 수를 비교해서 큰 수를 출력하는 기능의 함수.
// 함수선언
function showMax(a, b) { // <= 괄호() 안에 들어가는 것을 parameter(매개변수)라고 한다.
  if (a > b) {
    console.log(`큰값은 ${a}`);
  } else {
    console.log(`큰값은 ${b}`)
  }
 }
 // end of showMax(a,b)


let n1 = 10,
  n2 = 20;

//함수호출
showMax(n1, n2) // <= 괄호() 안에 들어가는 것을 argument(매개값) 라고 한다.

let m1 = 30,
  m2 = 40;
showMax(m1, m2);

// 예제 : 매개변수 2개 사용, 2개의 곱을 콘솔에 출력하는 함수 => 함수명은 getMulti로 사용

function getMulti(x, y) {
  let result = x * y;
  console.log(`두개의 곱의 값은 ${result} 입니다.`)
  return result; //반환 명령
}

let result = getMulti(m1, 50);
result = getMulti(getMulti(2,3), 7);
console.log(result);
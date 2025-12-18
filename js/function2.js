/* fuction2.js */
// 함수 이름은 sum => 매개변수 2개 더한 결과를 콘솔에 출력
let result1 = 10; // 전역변수(global variable)

function sum(x, y) {
  console.log(result1); // 전역변수는 함수 안에 값을 가져올 수 있다.
  let result = result1 + x + y; // 여기서 result는 지역(로컬)변수 라고 한다. => 함수 범위 내의 변수 라는 의미
  console.log(`합 ${result}`);
}

sum(1, 2);
console.log(`전역: ${result1}`);
// console.log(`전역: ${result}`);  // 함수 안에서 쓰여진 로컬변수는 함수 종료후 사용할 수 없다.
// let result1 = 20;                // 한번 정의된 전역변수는 재정의 할 수 없다. 
result1 = 20; // 변수값 변동은 가능하다.

{
  let result1 = 30;
  console.log(result1); // {}로 만들어진 블록레벨 내 에서는 재정의 가능(함수 구문이 아닌 블럭)
}
console.log(result1); // 블록레벨을 벗어나면 다시 예전값을 가진다.

// 예제 실행
// 함수이름 : gugudan => 구구단 4단을 콘솔에 출력.


function gugudan(dan) {
  for (let j = 1; j <= 9; j += 1) {
    console.log(`${dan} x ${j} = ${dan*j}`)
  }
}
gugudan(9);
// exe1.js
// Math.random()   => 0~1사이의 값을 랜덤으로 출력
// Math.ceil()    => 올림 처리를 해서 출력(정수로)
// Math.floor()    => 버림 처리를 해서 출력
let x = Math.random() * 10;
console.log(x)
console.log(Math.ceil(x));
console.log(Math.floor(x));
let a = (Math.floor(x));

// 임의의 값이 5보다 크면 true 반환 되도록 구문 진행
result = a > 5;
console.log(result)

//짝수이면 true 반환
result = a % 2 == 0
console.log(result)
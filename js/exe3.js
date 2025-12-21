// exe3.js 1219

// 정수를 담아놓기 위한 배열
const numAry = [10, 30, 50];
numAry[numAry.length] = 20;
numAry[numAry.length] = 60;
numAry[numAry.length] = 80;

//콘솔에 출력
// 50보다 크거나 같은 값만 출력

// for (let i = 0; i < numAry.length; i++) {
//   if (numAry[i] >= 50) {
//     console.log(`numAry[${i} 의 값 : ${numAry[i]}`);
//   }
// }
// console.log(numAry.length);

// 인덱스 순서가 홀수인 것만 나오게(index를 활용)
for (let i = 0; i < numAry.length; i++) {
  if (i % 2 == 0) {
    console.log(`numAry[${i} 의 값 : ${numAry[i]}`);
  }
}
console.log(numAry.length);

// 배열 값 중에서 제일 큰 값을 출력
let max = 0;
for (let i = 0; i < numAry.length; i++) {
  if (numAry[i] > max) {
    max = numAry[i];
  }
}
console.log(`numAry의 최대값 : ${max}`);

// 회원정보 => 회원아이디, 이름, 포인트
// 1. 포인트 합계 2. 최고 포인트 점수
let members = [
  { id: "user01", name: "홍길동", point: 800 },
  { id: "user02", name: "김문희", point: 756 },
  { id: "user03", name: "박동철", point: 980 },
];

let sum = 0;
for (let pt of members) {
  sum += pt.point;
}
console.log(`포인트 합계는 ${sum} 입니다.`);

let maximum = 0;
for (let pt of members) {
  if (maximum <= pt.point) {
    maximum = pt.point;
  }
}
console.log(`포인트 최대값은는 ${maximum} 입니다.`);

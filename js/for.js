// for.js //

// 1~5 까지 숫자를 sum이라는 변수에 누적해서 하려고 함 
let sum = 0; // 값을 누적
//원래 예시는 아래와 같음//
// sum +=1;
// sum +=2;
// sum +=3;
// sum +=4;
// sum +=5;
// => 요거를 for 활용해서 간단하게.

// 백틱이랑 어포스트로피 사용 구분할것~!
// for (let i = 1; i <= 50; i++) {
//   sum += i;
// console.log(`sum => ${sum}, i=> ${i}`);




// 1부터 100까지 정수 중에서 홀수의 합을 sum 변수에 누적

// sum = 0
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//     console.log(`sum => ${sum}, i=> ${i}`);
//   }
// }

// console.log(`최종합계 : ${sum}`);

// 1~100 까지 정수 중에 홀수의 합을 구해서 oddSum이라는 변수에 주고, 짝수의 합은 evenSum에 누적
// ---------- 내가 한거 -------------- //

// sum = 0
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//   }
// }
// let oddSum = sum

// sum = 0
// for (let o = 1; o <= 100; o++) {
//   if (o % 2 == 0) {
//     sum += o;
//   }
// }
// let evenSum = sum

// console.log(`홀수의 합은 ${oddSum}, 짝수의 합은 ${evenSum}`);

// --------------교수님 풀이---------------- //
let oddSum = 0;
let evenSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    oddSum += i;
  } else {
    evenSum += i;
  }
}

console.log(`홀수의 합은 ${oddSum}, 짝수의 합은 ${evenSum}`);
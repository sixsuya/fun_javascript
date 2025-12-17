// if.js
// Math.random()    =>  0 <= x < 1  (0~1사이의 값을 출력)
// 1 ~ 10 임의의 값을 생성해서 변수 x 에 입력
// x의 값에 따라 결과값을 "짝수입니다." or "홀수입니다." 라고 출력하는 구문



// let a = Math.random() * 10;
// console.log("랜덤값에 10 곱한 값 = " + a)
// let x = Math.floor(Math.random() * 10) + 1;   // 0~10 사이의 값
// console.log("floor를 통해 버린 값 + 1 = " + x)

// if(x%2==0){
//   console.log("짝수입니다.");
// } else {
//   console.log("홀수입니다.");
// }



// x의 값이 홀수이면서 5보다 크면 => 만족 / 만족하지 않음

let c = Math.floor(Math.random() * 10) +1;
console.log("c로 만든 랜덤 수 = " + c + "\n이것이 홀수이면서 5보다 작거나 같은가?")
if(c%2!=0 && c<=5){
console.log("%c 만족", "color : blue;");  
}else{
console.log("%c 불만족", "color : red;");
}


// 학생성적 출력 예제 ( 0 ~ 100점, 0점과 100점 포함해야 함)
//90~100 : A / 80~90 : B / 70~80 : C / 60~70 : D / 0~60 : F

// let x = Math.floor(Math.random() * 101) + 1; //100점까지 포함하기 위해 범위 넓히려고 101을 곱했음
// console.log(" 랜덤수 = " + x)
// if (x >= 90) {
//   console.log("A")
// } else {
//   if (x >= 80) {
//     console.log("B")
//   } else {
//     if (x >= 70) {
//       console.log("C")
//     } else {
//       if (x >= 60) {
//         console.log("D")
//       } else {
//         console.log("F")
//       }
//     }
//   }
// }

//3항 연산식
let d = Math.floor(Math.random() * 10) +1;
console.log("임의의 값 = " + d)
(d % 2 != 0 && d <= 5) ? console.log("%c 만족", "color : blue;") : console.log("%c 불만족", "color : red;");


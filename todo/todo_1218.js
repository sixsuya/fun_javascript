// todo__1218.js

// --------------- 내가 집에서 생각한것 ------------------//
// function scoreInfo(n) {
//     let a = Math.random() * 100
//     console.log(a)
//     if (a >= 0.3) {
//         let b = Math.ceil(a)
//         console.log(b)
//     }
//     for (let i = 1; i <= n; i++) {
//         let sum = 0;
//         sum += i * b;
//         console.log(`합계는 ${sum}`)
//         let average = 0;
//         average = sum / n
//         console.log(`평균은 ${average}`)
//         let max = 0;
//         if (max < b) {
//             max = b;
//         console.log(`최대값은 ${max}`)    
//         }
//     }
// }
// scoreInfo(5)

// -----------------상원씨 참고 자료(----------------//
// function scoreInfo() {
//     let sum = 0;
//         avg = 0;
//         max = 0;
//     for (i = 1; i <= 5; i++) {
//         let a = Math.ceil((Math.random() * 70) + 30);
//         sum += a;
//         if (max < a) {
//             max = a;
//         }
//     }    
//     avg = sum / 5;
//     console.log(`합계는 ${sum}, 평균은 ${avg}, 최대값은 ${max}`);
// }
// scoreInfo();

// 교수님 즉석 과제
// 1~10까지 정수를 합하는 반복문
// 홀수값만 누적
// " 합계는 n"
// function oddSum() {
//     let a = 0;
//     let sum = 0;
//     for (a = 1; a <= 10; a++ ) {
//         if (a % 2 == 1) {
//             sum += a;
//         }
//     }
//     console.log(`1에서 10까지 홀수값의 합은 ${sum}입니다.`)
// }
// oddSum();

// 함수이름은 sumUp() => 1~n까지의 합을 구하고, 반환하여 result 변수에 저장
function sumUp(n) {
    let a = 0;
    let result = 0;
    for (a = 1; a <= n; a++) {
        result += a;
    }
    console.log(result);
    return result
}
sumUp(10)
console.log(result);
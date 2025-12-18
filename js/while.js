// while.js
//우선 for 구문으로 표현하고, 이것을 while 구문으로 바꿔보자.
// for : 몇번 반복하겠다는 의미가 큼
// for (let i = 1; i <= 5; i += 1) {

//   console.log(`i의 값은 ${i}`);
// }

// while(조건) {실행블럭}
// while : 몇번일지 모르겟지만 조건 만족할때 까지 실행하겠다 라는 의미가 큼
// let o = 1;
// while (o <= 5) {
//   console.log(`o의 값은 ${o}`);
//   o += 1
// }

// true 나올때까지 실행하겟다는 예시
// while (true) {
//   let num = Math.ceil(Math.random() * 10);
//   console.log(`num => ${num}`);
//   if (num == 9) {
//     break;
//   }
// }

// 사용자가 종료 전까지 입력하는 수의 합을 구하고 q 입력하면 반복 종료
// let sum = 0;
// if (sum != 0) {
//   while (true) {
//     let yourValue = prompt('숫자를 입력하세요. 종료하려면 q 입력.')
//     if (yourValue == 'q') { // 사용자가 q를 눌러야 종료함
//       break;
//     }
//     yourValue = parseInt(yourValue); // 문자를 숫자형태로 인식하게끔 변환
//     sum += yourValue;
//   }
//   console.log(`합계:${sum}`);
// }

// Math.random() => 1 ~ 10 범위
// 5가 되면 반복문을 종료. 그때까지 생성한 값을 sum에 누적.

// let sum = 0;
// while (true) {
//   let num = Math.ceil(Math.random() * 10);
//   if (num == 5) {
//     break;
//   } else {
//     sum += num
//   }
// }
// console.log(`합계값은 ${sum}입니다.`)

// 학생의 점수를 prompt 통해 입력하다가 q 입력하면 입력종료
// 반평균 점수 구해서 평균 점수 문구 출력, 최고득점 점수 출력


let studentscore = 0;
let countn = 0;
let sum = 0;
let max = 0;
while (true) {
  let studentscore = prompt('학생 점수를 입력하세요. 종료하려면 q 입력.')
  if (studentscore == 'q') { // 사용자가 q를 눌러야 종료함
    break;
  } else {
    countn += 1;
  }
  if (max < studentscore) {
    max = studentscore;
  }
  studentscore = parseInt(studentscore);
  sum += studentscore;
  averagescore = sum / countn;
}

console.log(`평균점수는:${averagescore}입니다. 최고 득점 점수는 ${max}점 입니다.`);
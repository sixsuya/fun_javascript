// math.js

const ary = new Array(); // 인스턴스마다 각기 다른 값.
const today = new Date(); // 동일.

console.log(Math.round(3.523));
Math.random(); // 클래스.메소드 호출.

// 51(포함) ~ 100(포함)      => math.random   => 해당 값을 담을수 있는 변수
// 숫자 맞추기 함수
// 사용자가 값을 입력하면   => prompt => 이것을 담을 수 있는 변수
// 그것보다 크다/작다 알려주도록.
// 맞는 값을 입력하면   =>  break     정답이라고 알려 주도록.    => while 사용

let checkmate = Math.ceil(100 - Math.random() * 50);
console.log(checkmate);
let count = 0;

function numberGame() {
  while (true) {
    let num = prompt("숫자를 입력 하세요");
    count++;
    if (num == checkmate) {
      alert(`정답입니다.`);
      break;
    }
    if (checkmate < num) {
      alert(`보다 작은 값을 입력하세요`);
    } else {
      alert(`보다 큰 값을 입력하세요`);
    }
  }
  console.log(`end of game.`);
  console.log(count);
}

numberGame();

// 상원씨 작성 답안 //
// let comNum = Math.ceil(Math.random() * 50) + 50;
// let userNum = 0;
// while (userNum != comNum) {
//   userNum = prompt(`숫자를 51 ~ 100 중의 랜덤한 수를 맞춰보세요.`);
//   if (51 <= userNum && userNum <= 100 && Number(userNum) % 1 == 0) {
//     while (true) {
//       if (comNum > userNum) {
//         alert(`숫자가 더 커야합니다.`);
//         break;
//       } else if (comNum < userNum) {
//         alert(`숫자가 더 작아야합니다.`);
//         break;
//       } else {
//         alert(`정답입니다. 컴퓨터가 뽑은 수는 ${comNum}이었습니다.`);
//         break;
//       }
//     }
//   } else {
//     alert(`값을 잘 못 입력하셨습니다. 51과 100 사이의 정수 값을 입력해주세요`);
//   }
// }

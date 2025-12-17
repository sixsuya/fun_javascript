// exe2.js
// 가위바위보
// 1 => 가위 / 2 => 바위 / 3 => 보
// Math.random 통해 시스템에서 1~3 사이의 값이 나오게 해야 함
// 시스템이 1~3번 만들고, 사용자가 1~3번 입력하게 해서 결과값 비교해서 출력
// 결과값에 따라 Win / Lose / Draw  구문 출력

let a = Math.ceil(Math.random() * 3)
console.log("시스템의 값 = " + a + "\n1=가위 2=바위 3=보" )

let msg = prompt('1,2,3중에 값을 입력하세요:');
console.log("사용자의 입력값 = " + msg);

switch (msg) {
  case '1':
    console.log('사용자는 가위를 냈다.');
    break;
  case '2':
    console.log('사용자는 바위를 냈다.');
    break;
  case '3':
    console.log('사용자는 보를 냈다.');
    break;
  default:
    console.log('1,2,3중에 입력.');
}

if (a == 1 && msg == 1) {
  console.log("시스템 가위 vs 사용자 가위 = Draw")
} else {
  if (a == 1 && msg == 2) {
    console.log("시스템 가위 vs 사용자 바위 = Win")
  } else {
    if (a == 1 && msg == 3) {
      console.log("시스템 가위 vs 사용자 보 = lose")
    } else {
      if( a==2 && msg ==1){
        console.log("시스템 바위 vs 사용자 가위 = Lose")
      }else{
        if(a==2 && msg ==2){
          console.log("시스템 바위 vs 사용자 바위 = Draw")
        } else {
          if( a==2 && msg == 3){
            console.log("시스템 바위 vs 사용자 보 = Win")
          } else {
            if( a == 3 && msg == 1){
              console.log("시스템 보 vs 사용자 가위 = Win")
            } else {
              if(a == 3 && msg == 2){
                console.log("시스템 보 vs 사용자 바위 = Lose")
              } else {
                console.log("시스템 보 vs 사용자 보 = Draw")
              }
            }
          }
        }
      }
    }
  }
}

// 1 1 = draw, 1 2 = lose, 1 3 = win
// 2 1 = win 2 2 = draw 2 3 = lose
// 3 1 = losw 3 3 = draw 3 2 = win


// // exe2.js
// // 가위바위보 게임.
// // 1(가위),2(바위),3(보)
// // 시스템: 1~3, 사용자:1~3
// // You Win!/ You Lost!/ You Same! 구문을 출력.
// // 이기는 경우.
// // 1 - 2 : -1
// // 2 - 3 : -1
// // 3 - 1 : 2
// // 지는 경우.
// // 1 - 3 : -2
// // 2 - 1 : 1
// // 3 - 2 : 1
// let computer = Math.ceil(Math.random() * 3);
// let myChoice = prompt('가위(1), 바위(2), 보(3)를 선택하세요:');

// // 사용자가 값을 입력하지 않으면.
// if (myChoice == null || myChoice == '') {
//   alert('값을 입력해주세요.');

// } else {

//   let diff = computer - myChoice;
//   // 내가 이기는 경우.
//   console.log('computer: ' + computer + ', myChoice: ' + myChoice);
//   if (diff == -1 || diff == 2) {
//     console.log('You Win!');
//   } else if (diff == -2 || diff == 1) {
//     console.log('You Lost!');
//   } else {
//     console.log('You Same!');
//   }
// }

// if (computer == 5) {
//   console.log('-------------------------');
//   switch (diff) {
//     case -1:
//     case 2:
//       console.log('You Win!');
//       break;
//     case 1:
//     case -2:
//       console.log('You Lost!');
//       break;
//     default:
//       console.log('You Same!');
//   }
// }
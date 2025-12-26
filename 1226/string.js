// string.js
// productPage.js 에서 상품명 입력해서 조회하는 기능의 맛보기 예제 //

["LG 노트북", "삼성노트북", "모니터", "마우스"].forEach((elem) => {
  if (elem.indexOf("노트북") >= 0) {
    // -1이 없는 거고, 0보다 크면 있다는 뜻
    console.log(elem);
  }
});

let str = "hello, world";

// 1. substring(start_index, end_index) : 문자열의 값 출력
console.log(str.substring(1, 3)); // 1,3이면 1~2까지 라는 뜻.(마지막 3은 제외함)
// 위에꺼 찍어보면 그래서 hello 중에 e~l 까지 해서 el로 출력됨.()
// substring(start_index, end_index)
console.log(str.substring(0, 5)); // 0~4까지 값인 hello 까지 출력됨
console.log(str.substring(7)); // end_index 값 안주면 끝까지 가져옴

// 2. indexOf()  : 문자열 중에 값을 찾아서 그 위치 값(index)을 반환함
console.log(str.indexOf(",")); // ,는 hello 다음 5번째 있으므로, 숫자 5를 출력함
console.log(str.substring(0, str.indexOf(","))); // 0번째인 h부터 ,까지의 구문을 출력하므로, hello로 출력함

// 3.trim  : 공백을 제거하는 기능
console.log("  hello, world   ");
console.log("  hello, world   ".trim()); // 앞, 뒤 공백이 잘려서 출력됨

// 4. replace(a, b)   => a 값을 찾아서 b로 바꾸겠다는 뜻
console.log("hello, world".replace("world", "WORLD"));
console.log(str.replace("world", "WORLD"));

//5. split()  : 어떤 값을 기준으로 문자를 나누어 배열로 만들어 주는 것
let strAry = "apple, banana, cherry".split(",");
console.log(strAry); // (3) ['apple', ' banana', ' cherry']  이렇게 배열로 나뉘어서 출력(콤마 기준이므로 공백인 스페이스 값도 포함하여 배열로 나뉨)

// 6.charAt(index)  : 해당 값에 해당하는 문자열을 반환
console.log("welcome home".charAt(2)); // 2의 위치인 w.e.l <- l을 반환함

// 예제 : 주민번호로 성별 구분 (1,3은 남자 / 2,4는 여자)
"980503-1453212", "030505-4567123";
/////////////////내가 해보려고 한거/////////////
// let jumin = prompt(`주민번호를 입력하세요.`);
// console.log(jumin);
// function checkGender() {
//   let confirm = jumin;
//   let a = confirm.substring(7, 8);
//   if (a == 1 || 3) {
//     console.log("남자입니다.");
//   } else {
//     console.log("여자입니다.");
//   }
// }
// checkGender(jumin);

//////////////교수님 답안/////////////////

function checkGender(jumin) {
  let pos = 7;
  if (jumin.length == 13) {
    // 주민번호에 '-'를 안붙여서 쓰면.
    pos = 6;
  }
  switch (jumin.charAt(pos)) {
    case "1":
    case "3":
      console.log("남자입니다.");
      break;
    case "2":
    case "4":
      console.log("여자입니다.");
      break;
    default:
      console.log("잘못된 값입니다.");
  }
}
checkGender("9985964458687");

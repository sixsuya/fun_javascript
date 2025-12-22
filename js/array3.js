// array3.js

// 배열 요소에서 filter(). => true를 반환 해주는 요소를 새로운 배열에 추가.
// let filterAry = [10, 20, 30, 40, 50].filter((elem, idx, ary) => {
//   if (elem >= 30) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(filterAry);

// let filterAry = [10, 20, 30, 40, 50].filter((elem) => {
//   return elem >= 30; // 위에 if 함수를 간단히 표현한 자료
// });
// console.log(filterAry);

//예제
// 삭제할 친구 이름 입력 => 제거, 없으면 warning을 띄우기
// ( splice 말고 filter 사용하기)
// const filterFriends = ["새로운 배열이 만들어지도록"];
const friends = ["김가나", "이나라", "고바다", "오지은", "강아지"];
// 1. 이름 입력하도록 prompt
let delName = prompt("친구 이름을 입력하세요.");
// 2. 입력한 값을 friends 배열에서 찾아서 filter 메소드 활용.
let ixdx = friends.indexOf(delName);
if (ixdx == -1) {
  alert("찾는 이름이 없습니다.");
} else {
  const filterFriends = friends.filter((elem, idx) => {
    return ixdx != idx; // 찾는 인덱스를 기준으로 비교.
    // return elem != delName; // 찾는 elem을 기준으로 비교도 할수 있음(위와 같음)
  });
  console.log(filterFriends);
}

// //교수님 풀이
// const friends = ["박상원", "장수연", "양현규", "정찬우", "서영준"];
// // 삭제할 친구이름 입력 => 제거, 없으면 warning을 띄우기.

// // 1. 이름 입력하도록 prompt
// let delName = prompt("삭제할 이름을 입력하세요:");
// // 2. 입력한 값을 friends 배열에서 찾아서 filter 메소드 활용.
// //    입력한 이름과 같은값은 걸러내고 아닌 값만 새로운 배열에 담도록.
// let ixdx = friends.indexOf(delName);
// if (ixdx == -1) {
//   alert("찾는 이름이 없습니다.");
// } else {
//   const filterFriends = friends.filter((elem, idx) => {
//     return ixdx != idx; // 찾는 인덱스를 기준으로 비교.
//   });
//   console.log(filterFriends);
// }

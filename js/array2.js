// array2.js
const nameAry = new Array();
nameAry.push("장다라");
nameAry.push("김가나");
nameAry.unshift("이나라");
nameAry.push("홍길동");

nameAry.sort(); //가나다 순 정렬
nameAry.reverse(); // 반대순으로 정렬

// let idx = nameAry.indexOf("이나라"); //() 안에 오는 매개값의 인덱스를 반환해줌, 만약 그 값이 없으면 '-1'로 반환해줌
// console.log(idx);

// let idx2 = nameAry.indexOf("고나라"); //()안의 값이 매개값에 없으면 '-1'로 반환해줌 => 검증에 활용 가능
// console.log(idx2);

// splice 통해 특정 값의 value를 받아 삭제
// index 값을 받아 index 값이 없으면 alert 통해 없다고 알림

// 예제 풀이 - 성수 //
// 1) 삭제할 이름 받기
let namesearch = prompt("검색하고자 하는 이름을 입력하세요.");
// 2) 이름을 찾기(인덱스 활용)
let idx = nameAry.indexOf(namesearch);

// 3. 배열에서 삭제하기 만약 삭제할 이름이 없으면 warning 띄우기.
if (idx == -1) {
  alert("찾는 이름이 없습니다.");
} else {
  nameAry.splice(idx, 1);
}
// 목록확인.
nameAry.forEach((elem) => {
  console.log(elem);
});

// 예제풀이 - 교수님d

// const nameAry = new Array();
// nameAry.push("홍길동");
// nameAry.unshift("양현규");
// nameAry.splice(1, 0, "정찬우", "김진환", "홍길영");

// nameAry.sort(); // 가나다 순 정렬.
// nameAry.reverse();

// // 홍길영,홍길동,정찬우,양현규,김진환
// // 입력 받아서 친구의 이름을 목록에서 삭제.
// // 1. 삭제할 친구이름 입력받기.
// let delName = prompt("삭제할 이름을 입력하세요:");
// // 2. 이름을 찾기 (인덱스를 활용)
// let idx = nameAry.indexOf(delName); // 찾는 값의 인덱스 반환.
// // 3. 배열에서 삭제하기 만약 삭제할 이름이 없으면 warning 띄우기.
// if (idx == -1) {
//   alert("찾는 이름이 없습니다.");
// } else {
//   nameAry.splice(idx, 1);
// }
// // 목록확인.
// nameAry.forEach((elem) => {
//   console.log(elem);
// });

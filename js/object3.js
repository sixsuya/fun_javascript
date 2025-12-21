// object3.js
const friendsAray = [
  {
    name: "김가나",
    phone: "010-1111-1111",
    birth: "1985-01-01",
    tall: 151.3,
  },
  {
    name: "이다라",
    phone: "010-2222-2222",
    birth: "1985-02-02",
    tall: 161.1,
  },
  {
    name: "장나라",
    phone: "010-3333-3333",
    birth: "1985-03-03",
    tall: 172.4,
  },
  {
    name: "오마바",
    phone: "010-4444-4444",
    birth: "1985-04-04",
    tall: 181.1,
  },
];

// 학생 점수 합계를 표시하려면
// let sum = 0; // 변수 선언 하고 여기에 더한 값을 누적한다.
// let htmlStr = '<ul>';
// for (let student of studentAry) {
//   sum += student.score;
//   htmlStr += `<li> ${student.stdName}(${student.score})</li>`;
// }
// htmlStr += `<li>합계점수(${sum})</li>`; // 합계는 반복문 범위 밖에 써줘야 한다.
// htmlStr += '</ul>';
// document.writeln(htmlStr);
// console.log(`반점수 함계는 ${sum} 입니다.`);
// console.log(`반점수 평균은 ${sum / studentAry.length} 입니다.`);

// ------------------------표 예제 -------------//
let table = `<table border = '2'>`;
table += `<thead><tr><th> 친구이름 </th> <th> 연락처 </th> <th> 생일 </th> <th> 키 </th> </tr> </thead> <tbody>`;
for (let friends of friendsAray) {
  table += `<tr> 
  <td> ${friends.name} </td> 
  <td> ${friends.phone} </td> 
  <td> ${friends.birth} </td> 
  <td> ${friends.tall} </td>
  </tr>`;
}
table += `</tbody>
 </table>`;
document.writeln(table);

// todo_1219.js
// 화살표함수 (ES6)

// 데이터유형(객체,배열)

// 이벤트
// 화면영역에서 키보드 마우스 => 동작 - 이벤트 - 이벤트핸들러

// 과제 - 1219
// 친구 (이름, 연락처, 생일 : '08-20-12' <= date 타입으로, 키: 163.5 <= 소수점 있어야 함)
// 4명 생성 => friends 배열에 저장.
// 친구 평균키 : 17x.x , 제일 큰 키 : xxx.x (친구이름 나오게)
// table 태그를 활용해서 ducument.write(); 그리기.
// 참고사이트 : mdn web docs
// https://developer.mozilla.org/ko/    <= 개발자를 위한 웹 기술 > web API > Documents
// ChatGPT  => 코드 만들고 나서 컨펌 받을때 사용하면 유용함


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

let sum = 0;
  for( let friends of friendsAray){
    sum += friends.tall;
  }
  console.log(`친구의 평균 키는 ${sum/friendsAray.length} 입니다.`)

  let maximum = 0;
for (let friends of friendsAray) {
  if (maximum <= friends.tall) {
    maximum = friends.tall;
    maxname = friends.name;
  }
}
console.log(`제일 키큰 친구는 ${maximum}이며 그 친구 이름은 ${maxname} 입니다.`);

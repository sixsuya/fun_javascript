// date.js

// 객체, 메소드 =>
// // // 예제 : 콘솔에 요일정보를 출력하는 함수를 만들어 보자.
// function printDay(now) {
//   switch (now.getDay()) {
//     case 0:
//       console.log("일요일");
//       break;
//     case 1:
//       console.log("월요일");
//       break;
//     case 2:
//       console.log("화요일");
//       break;
//     case 3:
//       console.log("수요일");
//       break;
//     case 4:
//       console.log("목요일");
//       break;
//     case 5:
//       console.log("금요일");
//       break;
//     case 6:
//       console.log("토요일");
//       break;
//   }
// }
// printDay(today);

// let today = new Date();
// console.log(today.getMonth()); // 월은 0부터 시작(1월=0, 12월=11)
// console.log(today.getDate()); // 일자는 1부터 가져옴
// console.log(today.getDay()); // 요일은 0~6(일~토)

//set  =>  원하는 값으로 설정 변경
// today.setFullYear(1970); // today에서 YYYY를 변경해서 세팅할때
// today.setFullYear(1970); // 1970.01.01 00:00:00 부터 1초마다 1000을 누적 더한값이 getTime 시간표시방식임
// today.setMonth(0);
// today.setDate(1);
// today.setHours(0);
// today.setMinutes(0);
// today.setSeconds(0);
// // console.log(today.getTime());   // GMT+9시간 차이가 나므로, 1970-01-01 00:00:00 과 초기 값 32400000정도 차이가 남
// console.log(today);
// today = new Date();

// const aday = new Date("Sun Dec 21 2025 10:00:00 GMT+0900");
// console.log(aday);
// console.log(today.getTime()); // 예제 => (시), 분, 초 단위환산  어제 특정시간에 비해 지금 몇시간,몇분,몇초 지났다고 표현하라
// console.log(
//   `어제로부터 지금은 ${Math.floor(
//     (today.getTime() - aday) / 1000
//   )}초, ${Math.floor((today.getTime() - aday) / 1000 / 60)}분, ${Math.floor(
//     (today.getTime() - aday) / 1000 / 60 / 60
//   )}시간이 지났습니다.`
// );

// 예제풀이 = > 교수님버전 : 어제부터 'x시간 y분 z초' 지났다고 표현하자.
// today = new Date();
// const aday = new Date("Sun Dec 21 2025 16:25:00 GMT+0900");

// const diff = (today.getTime() - aday.getTime()) / 1000;
// // (시), 분, 초 단위환산.
// const hours = Math.floor(diff / 60 / 60);
// const minutes = Math.floor((diff % (60 * 60)) / 60); // 분
// const seconds = Math.floor(diff % 60); // 초
// console.log(`${hours}시간 ${minutes} 분 ${seconds} 초`);

// 예제 : 달력그려보기
// 필요값 : 1일이 어느 요일 시작인지 & 몇일이 끝나는 날인지.
// => 1일이 화요일이고 31일로 끝나는 달력 그리기.

// function printCalendar() {       // 다음 예제를 위해 함수 형태로 표기함
//   const spaces = 2; // <= 화요일부터 시작이므로, 앞에 2개 날짜 공백처리 선언
//   const lastDate = 31; // <= 끝나는 날짜를 선언
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   let htmlStr = `<table border = 2><thead><tr>`;
//   for (let day of days) {
//     htmlStr += `<th> ${day} </th>`;
//   }
//   htmlStr += "</tr></thead><tbody><tr>";
//   //공란 앞쪽에 삽입하기
//   for (let s = 0; s < spaces; s++) {
//     htmlStr += "<td></td>";
//   }
//   for (let d = 1; d <= lastDate; d++) {
//     htmlStr += `<td> ${d} </td>`;
//     if ((d + spaces) % 7 == 0) {
//       //<= 요거를 if (d % 7 == 7 - spaces) {  이렇게 했을때 나는 적용되었음.
//       htmlStr += "</tr><tr>";
//     }
//   }
//   htmlStr += `</tr></tbody></table>`;
//   document.writeln(htmlStr);
// }
// printCalendar();

// 예제 : 달력그려보기
// 필요값 : 1일이 어느 요일 시작인지 & 몇일이 끝나는 날인지.
// => 1일이 화요일이고 31일로 끝나는 달력 그리기.

// let year = 2024;
// let month = 3; // <- 숫자를 넣은 달의 달력을 그리기. (0부터 시작 반영)

// today.setDate(0);   // <= 전달 마지막날을 의미(1-1)
// today.getDay();   /// <- 여기서 앞의 자료를 바탕으로 1일의 요일과 말일의 정보를 알수 있음.

// today = new Date();
// let n = 0;
// today.setFullYear(year);
// today.setMonth(month - 1);
// today.setDate(n + 1);
// console.log(today);
// let a = today.getDay(n + 1); // 당월 1일의 요일값
// console.log(a);
// today.setMonth(month);
// today.setDate(n);
// console.log(today);
// let b = today.getDay(n); // 당월 말일의 요일 값
// console.log(b);

// let year = prompt("연도를 입력하시오");
// let month = prompt("달을 입력하시오");

// function printCalendar(a, b) {
//   today = new Date();
//   let n = 0;
//   today.setFullYear(a);
//   today.setMonth(b - 1);
//   today.setDate(n + 1);
//   console.log(today);
//   let c = today.getDay(n + 1); // 당월 1일의 요일값
//   console.log(a);
//   today.setMonth(b);
//   today.setDate(n);
//   console.log(today);
//   let d = today.getDay(n); // 당월 말일의 요일 값
//   let e = today.getDate(n); // 당월 말일 값
//   console.log(b);

//   const spaces = c; // <= 화요일부터 시작이므로, 앞에 2개 날짜 공백처리 선언
//   const lastDate = e; // <= 끝나는 날짜를 선언
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   let htmlStr = `<table border = 2><caption>${a}년 ${b}월 </caption><thead><tr>`;
//   for (let day of days) {
//     htmlStr += `<th> ${day} </th>`;
//   }
//   htmlStr += "</tr></thead><tbody><tr>";
//   //공란 앞쪽에 삽입하기
//   for (let s = 0; s < spaces; s++) {
//     htmlStr += "<td></td>";
//   }
//   for (let d = 1; d <= lastDate; d++) {
//     htmlStr += `<td> ${d} </td>`;
//     if ((d + spaces) % 7 == 0) {
//       //<= 요거를 if (d % 7 == 7 - spaces) {  이렇게 했을때 나는 적용되었음.
//       htmlStr += "</tr><tr>";
//     }
//   }
//   htmlStr += `</tr></tbody></table>`;
//   document.writeln(htmlStr);
// }
// printCalendar(year, month);

// 상원씨 작업내용 //
// function printCalendar1(yyyy, mm) {
//   // 1일이 화요일, 31일이 마지막 날.
//   if (mm > 12) {
//     alert(`월은 12월까지 입력해 주세요`)
//   } else {
//     const today = new Date();
//     today.setFullYear(yyyy);
//     today.setMonth(mm - 1);
//     today.setDate(1);
//     const spaces = today.getDay(); // 달력 앞의 날짜가 없는 공란
//     today.setMonth(mm);
//     today.setDate(0);
//     const lastDate = today.getDate(); // 달력의 마지막날은 31일
//     // 배열을 이용해보기
//     const days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

//     let htmlStr = `<table border = '2'><h2>${yyyy}년</h2><thead><caption>${mm}월</caption><tr>`;

//     for (let day of days) {
//       htmlStr += `<th>${day}</th>`;
//     }

//     htmlStr += `</tr></thead><tbody><tr>`;
//     // 공란 그리기
//     for(let s = 1; s <= spaces; s++) {
//       htmlStr += `<td></td>`;
//     }

//     for (let d = 1; d <= lastDate; d++) {
//       htmlStr += `<td>${d}</td>`;
//       if((d + spaces) % 7 == 0) {
//         htmlStr += '</dr><tr>';
//       }
//     }

//     htmlStr += `</tr></tbody></table>`;

//     document.writeln(htmlStr);
// }
// }
// let yyyy = Number(prompt(`확인하고 싶은 달력의 년도를 입력해주세요(yyyy형식)`));
// let mm = Number(prompt(`확인하고 싶은 달력의 월을 입력해주세요 (mm형식)`));

// printCalendar1(yyyy, mm);

// let year = 2025; // 입력받는 값
// let month = 2; // 입력받는 값

// today = new Date();
// today.setFullYear(year);
// today.setMonth(month);
// today.setDate(1); // setDate 값이 0이면 전 달 마지막날
// today.getDay(); // 1일의 요일정보 알 수 있다(공백의 값을 얻을 수 있다.),

// printDay(today);

// 교수님 답안 //

// // 달력생성
// function printCalendar(yyyy, mm) {
//   let today = new Date(); // Date객체 선언. 2025년 5월달.
//   today.setFullYear(yyyy); // 2025.
//   today.setMonth(mm - 1); // 2025. 5.
//   today.setDate(1); // 2025. 5. 1

//   // 1일의 요일정보.
//   const spaces = today.getDay(); // 요일정보.

//   today.setMonth(mm); // 2025. 6.
//   today.setDate(0); // 2025. 5. 말일.

//   // 월의 마지막날.
//   const lastDate = today.getDate();

//   // 배열.
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   let htmlStr = `<table border='2'><thead><tr>`;
//   for (let day of days) {
//     htmlStr += `<th>${day}</th>`;
//   }
//   htmlStr += "</tr></thead><tbody><tr>";
//   // 공란.
//   for (let s = 0; s < spaces; s++) {
//     htmlStr += `<td> </td>`;
//   }
//   // 날짜.
//   for (let d = 1; d <= lastDate; d++) {
//     htmlStr += `<td>${d}</td>`;
//     if ((d + spaces) % 7 == 0) {
//       htmlStr += "</tr><tr>";
//     }
//   }
//   htmlStr += `</tr></tbody></table>`;
//   document.writeln(htmlStr);
// }
// printCalendar(2025, 5); // 달력호출.

// 12.23 DOM을 이용한 달력 만들기 예제 //

// 달력생성
function printCalendar(yyyy, mm) {
  let today = new Date(); // Date객체 선언. 2025년 5월달.
  today.setFullYear(yyyy); // 2025.
  today.setMonth(mm - 1); // 2025. 5.
  today.setDate(1); // 2025. 5. 1

  // 1일의 요일정보.
  const spaces = today.getDay(); // 요일정보.

  today.setMonth(mm); // 2025. 6.
  today.setDate(0); // 2025. 5. 말일.

  // 월의 마지막날.
  const lastDate = today.getDate();

  // 배열.
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = `<table border='2'><caption>${yyyy}년 ${mm}월 </caption><thead><tr>`;
  for (let day of days) {
    htmlStr += `<th>${day}</th>`;
  }
  htmlStr += "</tr></thead><tbody><tr>";
  // 공란.
  for (let s = 0; s < spaces; s++) {
    htmlStr += `<td> </td>`;
  }
  // 날짜.
  for (let d = 1; d <= lastDate; d++) {
    htmlStr += `<td>${d}</td>`;
    if ((d + spaces) % 7 == 0) {
      htmlStr += "</tr><tr>";
    }
  }
  htmlStr += `</tr></tbody></table>`;
  document.querySelector("#calendar").innerHTML = htmlStr;
}
printCalendar(year, month); // 달력호출.

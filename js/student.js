// student.js
// 등록버튼을 누르면 사용자가 입력한 값이 아래 createlimet 3개 해서 appendchild 하고 tbody에 appendchild
// 동일한 학생번호는 중복값 찾아서 알려줄수 있도록.
let students = [
  {
    studNo: "25-001",
    studName: "홍길동",
    score: 90,
  },
  {
    studNo: "25-002",
    studName: "김가나",
    score: 80,
  },
  {
    studNo: "25-003",
    studName: "이다라",
    score: 70,
  },
];

//기존의 tbody의 html 삭제.
const target = document.querySelector("div.list tbody");
target.innerHTML = " ";

makeList();

////////////////이벤트/////////////////
//등록버튼.

document
  .querySelector('button[class*="success"]') //
  .addEventListener("click", (e) => {
    console.log(e);
    const studNo = document.querySelector("#studNo").value;
    const studName = document.querySelector("#studName").value;
    const score = document.querySelector("#score").value;
    // 항목을 입력하지 않으면 입력하라는 메세지가 나오며 중단되도록.
    if (!studNo || !studName || !score) {
      // 3개 중 하나라도 안되면 안된다는 뜻
      alert("입력하세요!");
      return;
    }

    //중복값체크.
    // for (let student of students) {
    //   if (student.studNo == studNo) {
    //     alert(`동일한 학생번호가 존재합니다.`);
    //     return;
    //   }
    // }
    ////   위에꺼랑 똑같이 중복값 체크 하는 다른 방법 //////
    let exists = students.some((elem) => elem.studNo == studNo);
    if (exists) {
      alert("동일한 학생번호 존재합니다.");
      return;
    }

    students.push({
      studNo,
      studName,
      score,
    });
    makeList();
    // target.appendChild(
    //   makeTr({
    //     studNo,
    //     studName, // <= 속성과 변수가 같은 이름을 쓸때, 줄여서 써도 됨
    //     score,
    //   })
    // );
    // });
  });

////////////////함수///////////////////
// 배열의값을 받아 화면에 출력하는 구문
function makeList() {
  target.innerHTML = " "; // 기존목록 지우기.
  //학생수만큼 생성.
  for (let i = 0; i < students.length; i++) {
    //
    let tr = makeTr(students[i]);
    console.log(tr);
    //div에 클래스 이름이 list인 곳의 tbody의 자식에게 적용 : div.list tbody
    document.querySelector("div.list tbody").appendChild(tr);
  }
} // end of makeList.

// 학생정보 -> tr 생성해주는 함수.
function makeTr(student = {}) {
  // tr생성.
  let tr = document.createElement("tr");
  for (let prop in student) {
    // 요거는 ofr(let prop of ['studNo', 'studName', 'score']와 같음.
    //객체반복문 : prop
    // td생성.
    let td = document.createElement("td");
    td.innerText = student[prop];
    tr.appendChild(td); //형제 관계이므로 결합해준다.
  }
  // <td><button>삭제</button></td>
  let td = document.createElement("td"); //<td></td>
  let delbtn = document.createElement("button"); //  <button></button>
  delbtn.innerText = "삭제"; //  <button>삭제</button>
  delbtn.className = "btn btn-danger"; //  <button class='btn btn-danger'>삭제</button>
  td.appendChild(delbtn); //<td><button class='btn btn-danger'>삭제</button></td>
  tr.appendChild(td); // <tr>...<td><button class='btn btn-danger'>삭제</button></td></tr>
  //반환
  return tr;
}
// end of makeTr.

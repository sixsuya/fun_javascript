// 체크리스트.js

//교수님. 저는 문제를 구현하지 못했습니다. 다만, 제가 아래에 쓴 코드는
// 저번 수업에 사용한 create.html의 script 부분을 따와서 구현해 보고자 했으며
// 옆에 주석으로 코드 의미와 구현하고자 하는 의견을 개진했습니다. 참고 바랍니다.

///// form에 입력하는 value로 li를 생성하고 값을 추가해 나가고자 함
let itemInput = document.querySelector("input");
document
  .querySelector(".addBtn") // '추가' 버튼 경로
  .addEventListener("submit", (e) => {
    //추가 버튼 누를시 작동하는 이벤트
    let itemName = document.querySelector("input").value; // input value는 콘솔에 찍으면 확인 되는데 그게 itemName으로 물고 가지지 않습니다...console.log(itemName) 하면  undefined가 나옴
    if (!itemName) {
      alert("값을 입력하세요."); // null 값일때, 경고를 띄워 주는 값
      return;
    }
    let liTag = document.createElement("li"); //   <li></li>     litag를 통해 li를 생성
    liTag.innerText = itemName; // litag를 통해 생성되는 li의 텍스트값 : form에 입력한 값
    liTag.addEventListener(
      "click",
      (e) => {
        let target = e.target; // 만들어진 li 항목에 클릭 이벤트 실현
        if (e.target.tagName == "item") {
          // 타겟의 태그네임이 아이템인 경우, 부모 요소로 타겟 설정
          target = e.target.parentElement;
        }
      },
      true
    );

    //////////중복값 확인/////////////////////
    let exists = itemName.some((elem) => elem.itemName == itemName);
    if (exists) {
      alert("동일한 이름이 존재합니다.");
      return;
    }

    // <button>삭제</button> => delbtn 변수
    let delbtn = document.createElement("button");
    delbtn.innerText = "X";
    liTag.appendChild(delbtn); // 삭제버튼과 li 값 결합
    delbtn.addEventListener(
      // del 버튼 이벤트 설정 : 누르면 삭제
      "click",
      (e) => {
        e.target.parentElement.remove();
      },
      true
    );
    //ul 선택
    document.querySelector("iteminput").appendChild(liTag);
    //초기화
    document.querySelector("#itemName").value = "";
    itemInput.focus();
  });

// function itemAdd() {
//   const itemName = document.querySelector("input").value;     <- 해결되지 않아 인터넷 검색했으나, 실행하지 못했습니다.
//   const li = document.createElement("li");
//   li.setAttribute("item", addValue);
//   li.innerText = itemName;
//   li.appendChild(textNode);
//   document.getElementById("itemName").appendChild(li);
// }

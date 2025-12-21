// event.js
// 이벤트는 반드시 이벤트핸들러가 있어야 기능이 발휘됨
// 버튼(클릭) - 이벤트핸들러 등록.

// document.querySelector('선택자') => 화면요소를 찾아서 반환.

console.dir(document.querySelector("button")); // console.log가 아니라 dir임(객체 구조를 보여주게 해줌. 하위속성도 보여줌)
document
  .querySelector("button") //
  .addEventListener("click", function () {
    // ( )안에 들어가는 값들 => 1)이벤트유형 2)이벤트핸들러(함수)
    console.log("클릭됨");
    this.style.backgroundColor = "red"; // 이벤트핸들러 안에서 (this) : 이벤트를 받는 대상을 의미
    this.style.color = "yellow";
    this.innerHTML = "Event";
  });

// // li 각 요소에 이벤트.  => html에 li에 이벤트 주는 것을 jv에서 표현
let allList = document.querySelectorAll("#second > li");
console.log(allList);
for (let i = 0; i < allList.length; i++) {
  allList[i].addEventListener("click", liClickFnc);
  allList[i].addEventListener("mouseover", mouseOverFnc);
  allList[i].addEventListener("mouseout", mouseOutFnc);
}

document
  .querySelector("button") //
  .addEventListener("mouseover", (e) => {
    // 여기 이벤트핸들러 안에서 (this) : Window 객체에서 이벤트를 받는 대상을 의미
    console.log(e.target); // <- this와 같아지게 만드는 의미
    e.target.style.color = "blue";
  });

// 함수들
function liClickFnc(e) {
  console.log(e.target.innerHTML); // e.target 이벤트 대상
}

function mouseOverFnc(e) {
  e.target.style.backgroundColor = "yellow";
}

function mouseOutFnc(e) {
  e.target.style.backgroundColor = "";
}

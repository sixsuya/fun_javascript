// // ------ '상세 설명 보기' 효과 주기-----  //
document.querySelector("#view").addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.innerText == "상세 설명 보기") {
    document.querySelector("#detail").style.display = "block";
    e.target.innerText = "상세 설명 닫기";
  } else if (e.target.innerText == "상세 설명 닫기") {
    document.querySelector("#detail").style.display = "none";
    e.target.innerText = "상세 설명 보기";
  }
});

/////////////////-- 위랑 같은 내용인데 작동 오류 있음 -- ////////////
// document.querySelector("#view").addEventListener("click", (e) => {
//   if ((document.querySelector("#view").innerText = "상세 설명 보기")) {
//     document.querySelector("#detail").style.display = "block";
//     document.querySelector("#view").innerText = "상세 설명 닫기";
//   } else if (
//     (document.querySelector("#view").innerText = "상세 설명 닫기")
//   ) {
//     document.querySelector("#detail").style.display = "none";
//     document.querySelector("#view").innerText = "상세 설명 보기";
//   }
// });

// ------ 하단 작은 이미지 클릭하면 위에 큰 이미지로 보여주기-----
// console.log(document.querySelectorAll("#small-pic"));
// document.querySelectorAll("#small-pic").forEach((elem) => {
//   console.log(elem); //<- elem 값을 꼭 로그로 찍어서 파악해볼것!!!
//   elem.addEventListener("click", (e) => {
//     console.log(e.target.src); // 클릭한 이미지의 sec 속성(attribute)
//     document.querySelector("#cup").src = e.target.src;
//   });
// });

// ----- 버튼을 누르면 바뀌는 액션 -------
// console.log(document.querySelectorAll("button"));
// document.querySelectorAll("button").forEach((elem) => {
//   console.log(elem); //<- elem 값을 꼭 로그로 찍어서 파악해볼것!!!
//   elem.addEventListener("click", (e) => {
//     e.target.style.color = "red";
//   });
// });
document.querySelector("button").addEventListener("click", (e) => {
  console.log(e);
  e.target.style.backgroundColor = "yellow";
});

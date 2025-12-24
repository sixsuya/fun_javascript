// dom1.js
console.log(document.querySelectorAll("div#detail>ul>li"));
// 1.element node       2. text nod  예시<li>Apple</li>        3. attiribute node
// 예시 : <li id = 'first'>Apple</li>

// element node를 만드는 메소드 : createElement()
// document.createElement("li"); //  <=태그는 대소문자 구분 안함
let liTag = document.createElement("li"); //   <li></li>
// let txt = document.createTextNode("Apple"); //  <li>"Apple"</li>
// liTag.appendChild(txt);
liTag.innerText = "Apple";

console.log(liTag);

//ul에 자식요소로 등록.    <ul>....<li>Apple</li></ul>
document.querySelector("div#detail>ul").appendChild(liTag); //

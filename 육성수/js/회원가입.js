//회원가입.js

document.querySelector("#join").addEventListener("click", (e) => {
  // '가입하기' 버튼에 join 아이디를 부여하여 클릭할때 검증시행
  const idinput = document.querySelector("input#user-id").value;
  console.log(idinput);
  console.log(idinput.length);
  if (idinput.length < 4) {
    alert("아이디를 자리수에 맞게 다시 입력하세요");
  } else {
    if (idinput.length >= 16) {
      alert("아이디를 자리수에 맞게 다시 입력하세요");
      let uid = document.querySelector("#user-id");
      uid.focus();
    }
  }
});

document.querySelector("#join").addEventListener("click", (e) => {
  // '가입하기' 버튼에 join 아이디를 부여하여 클릭할때 검증시행
  const firstpw = document.querySelector("input#user-pw1").value;
  console.log(firstpw);
  console.log(firstpw.length);
  if (firstpw.length < 8) {
    alert("비밀번호를 8자리 이상으로 입력하세요");
    document.querySelector("#user-pw1").value = "";
  }
  fitstpw.focus();
});

let crosscheckPw = document.querySelector("#user-pw2");
document.querySelector("#join").addEventListener("click", (e) => {
  // '가입하기' 버튼에 join 아이디를 부여하여 클릭할때 검증시행
  const crosscheckPw = document.querySelector("input#user-pw2").value;
  console.log(crosscheckPw);
  if (firstpw != crosscheckPw) {
    alert("비밀번호가 일치하지 않습니다.");
    document.querySelector("#user-pw2").value = "";
  }
  crosscheckPw.focus();
});

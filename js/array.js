// array.js          => p.594~595 표 외우는게 좋음.

// const numAry = new Array(); // 원래 선언 후, 값을 후에 입력하는것이 관례.
const numAry = [10, 20, 30]; // 선언과 동시에 초기에 값을 주는 방식.
const chrAry = ["a", "b", "c"];
const str = "hello";

// const newAry = numAry.concat(chrAry);        // 배열을 합쳐서 사용하는 매소드
// console.log(`newAry = ${newAry}`);

const newAry = numAry.concat(chrAry); // 배열을 합쳐서 사용하는 매소드
console.log(`newAry = ${newAry.join("/")}`); // join은 배열요소를 연결해서 하나의 문자열로 만들어주며, 각 요소 사이에 구분자를 지정할 수 있음

// 추가,삭제
numAry.push(40); // push 통해 뒤에 추가 가능 (배열만 가능)
numAry.unshift(50); // 배열의 제일 앞에 추가 하겠다는 명령어
numAry.pop(); // 제일 뒤에꺼 삭제
numAry.shift(); // 제일 앞에꺼 삭제

// numAry.splice(0, 1, 50); // 첫번째 : 위치(첫번째가 0임), 두번째 : 수정할 대상의 크기, 세번째 : 대체할 값
// numAry.splice(0, 0, 50); // 첫번째 : 위치, 두번째: 대체할 크기가 0이므로 추가한다와 같음, 세번째 : 대체할 값
// numAry.splice(0, 1); // 첫번째 : 위치, 두번째: 비움 => 삭제의 의미, 세번째 : 삭제할 값의 크기
numAry.splice(0, 2, 1, 2, 3, 4, 5); // 첫번째 : 위치, 두번째: 앞에서 부터 2개를 ,세번째 : 1,2,3,4,5로 대체하겠다

console.log(`numAry => ${numAry}`, numAry);

// slice : 어디서 부터 어느만큼 잘라내서 값을 만들어 내겠다는 의미
console.log(numAry.slice(1, 3)); // [1,2,3,4,5,30] 중에서  2번째인 2부터 시작해서 3개인 4까지 3개이나, 마지막 4는 제외함

numAry.forEach(function (elem, idx, ary) {    // function 안의 값은 이미 정해져 있음.
numAry.forEach((elem, idx, ary) => {          // function 안의 값은 이미 정해져 있음.
  console.log(`첫번째 : ${elem}, 두번째 : ${idx}, 세번째 : ${ary}`);
});

// 각 요소들 값중에서 elem 값이 짝수만 콘솔에 출력
// numAry.forEach((elem, idx, ary) => {
//   if (elem % 2 == 0) {
//     console.log(elem);
//   }
// });

// 인덱스 순번 세번째 까지만 elem 값을 출력하겠다.
// numAry.forEach((elem, idx, ary) => {
//   if (idx < 3) {
//     console.log(elem);
//   }
// });

//삼항문을 활용해 elem 값이 짝수인 것만 한줄에 표현해보기
numAry.forEach((elem) => (elem % 2 == 0 ? console.log(elem) : ""));

// str.push("world"); // str은 문자 상수임. push 통해 추가 불가.

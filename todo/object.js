// object.js 1219 p.512~ //
// 객체 타입 = {속성:값, 속성:값}
// 객체 : 1)속성(Field) : 값   2)속성: 메소드(함수)
const obj = {
  name: "홍길동",
  stdNo: "25-0001",
  phone: "010-1111-2222",
  bloodType: "AB",
  showInfo: function () {
    console.log(`학번은 ${obj.stdNo}이고 이름은 ${obj.name}`);
  },
  friends: ['김길동', '박길동', '최길동'],
};
obj.name = "박길동"; // 변수명.속성 = "값"   /  변수명[속성] = "값"
obj['phone'] = '010-1212-2323';
console.log(obj.name);
console.log(obj.stdNo);
console.log(`첫번째 친구이름 : ${obj.friends[0]}`)
obj.showInfo()


//numAry//
const numAry = [20, 17, 30, 25, 22, 38, 'hello', true]; //[]괄호안의 값을 인덱스라고 함. 
numAry[2] = 40; //3번째 인덱스 값을 변경(30 => 40)
// console.log(numAry[2]);
//반복문에 적용//
for (let i = 0; i < numAry.length; i++) {
  console.log(numAry[i]);
}
// 배열 반복문//
// 배열크기
console.log(numAry.length);

// 홍길동, 박길동, 최길동 => nameAry
const nameAry = ['홍길동', '박길동', '최길동'];
nameAry[3]='류길동';
// for .. of .. 반복문 => 41~44열 // 주석 부분을 간략히 만든것  => 배열일때 사용
for(let name of nameAry){
  console.log(name);
}
// for (let n = 0; n < nameAry.length; n++) {
//   console.log(nameAry[n]);
// }
// console.log(nameAry.length);

// for .. in .. 반복문 => 객체일때 사용(obj같은 경우)
obj.hobbies = ['게임','독서','캠핑'];   // 속성과 값을 추가하면 아래 prop에 추가로 반영됨
                    // obj. hobbies 는 obj['hobbies'] 로도 표현할 수 있음
// 속성삭제.
delete obj.bloodType;
for(let prop in obj){
  console.log(`속성 => ${prop}, 값 => ${obj[prop]}` );
}
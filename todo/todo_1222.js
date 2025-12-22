// todo_1222.js

// 객체(Object) => p.589~
// 내장객체, DOM(문서객체모델 : Document object model), BOM(Browser object Model), 사용자 정의 객체

class People {
  // People 이라는 속성 Class 생성(붕어빵틀) = 객체
  constructor(name, age) {
    // constructor 통해 속성 정의
    this.name = name; // this를 반드시 넣어야 됨
    this.age = age;
  }
  showInfo() {
    //기능(메소드) : 속성과 값을 통해객체 표현
    console.log(`이름은 ${this.name}, 나이는 ${this.age}`);
  }
}

const person1 = new People("홍길동", 20); //인스턴스 생성 => People이라는 Class의 속성에 맞게 person1이라는 결과물(인스턴스) 생성
// 인스턴스 : 클래스를 통해 정의되어 나온 붕어빵

console.log(person1);

// object2.js
// 객체 + 배열 활용.
// 학생번호, 이름, 연락처, 점수
const studentAry = [{
    stdNo: '25-0001',
    stdName: '홍길동',
    phone: '010-1111-1111',
    score: 80
  },
  {
    stdNo: '25-0002',
    stdName: '김명수',
    phone: '010-2222-2222',
    score: 70
  },
  {
    stdNo: '25-0003',
    stdName: '최덕배',
    phone: '010-3333-3333',
    score: 85
  },
  {
    stdNo: '25-0004',
    stdName: '박우수',
    phone: '010-3333-3333',
    score: 95
  },
];
console.log(studentAry[1].stdName);
console.log(studentAry[2].phone);

// 학생 점수 합계를 표시하려면
let sum = 0; // 변수 선언 하고 여기에 더한 값을 누적한다.
let htmlStr = '<ul>';
for (let student of studentAry) {
  sum += student.score;
  htmlStr += `<li> ${student.stdName}(${student.score})</li>`;
}
htmlStr += `<li>합계점수(${sum})</li>`;    // 합계는 반복문 범위 밖에 써줘야 한다.
htmlStr += '</ul>';
document.writeln(htmlStr);
console.log(`반점수 함계는 ${sum} 입니다.`);
console.log(`반점수 평균은 ${sum / studentAry.length} 입니다.`);
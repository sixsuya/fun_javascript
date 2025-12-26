// productPage.js
// <tbody id="list"></tbody>   요기 사이에 tr과 td 4개 들어가야함
// console.log(products); // <- 상품정보가 있는 원본 데이터

// category 중복제거 후 배열에 저장.
let categories = [];
for (let i = 0; i < products.length; i++) {
  if (categories.indexOf(products[i].category) == -1) {
    categories.push(products[i].category);
  }
}
// console.log(categories); // 51개 중 6개가 중복값 제거 후 콘솔에 찍힘

// 화면에 카테고리 추가
const selectCategories = document.querySelector("select.categories");
categories.forEach((elem) => {
  // <option value = '값'>전자기기</option>
  let opt = document.createElement("option");
  opt.innerText = elem;
  opt.setAttribute("value", elem); // <=  <option value = '전자기기'>....
  selectCategories.appendChild(opt); // <select>의 하위요소로 등록
});

//목록출력
const target = document.querySelector("#list"); // tbody의 dom 정보
showProductList(products); //  전체 목록 출력

/////////////////이벤트/////////////
selectCategories.addEventListener("change", (e) => {
  const selectValue = e.target.value; //카테고리 같은 상품만 배열에 저장하겠다는 의미

  ///////여기서 부터
  // const filterProducts = products.filter(elem => {    // filter : 값 중에 일치하는 것만 되돌려주는 함수
  //   if(elem.category == selectValue){                 //  옆에 if문은 return으로 표현할수도 있음.
  //     return true;
  //   }
  //   return false;
  ////// 여기까지를 간단하게 아래와 같이 표현함.
  const filterProducts = products.filter(
    (elem) => elem.category == selectValue
  );
  showProductList(filterProducts); //  <- 함수 실행
});

/////////////// '조회' 버튼을 클릭하면....
// filter 메소드를 활용해서 목록을 가져오고, 이것을 showProductList함수에 넣어서 출력.
document.querySelector("button").addEventListener(
  "click",
  (e) => {
    const search = document.querySelector("input").value;
    const lookfor = products.filter(
      (elem) => elem.productName == search
    ;)
    showProductList(lookfor);
  });

/////////////// 함수 /////////////////   <= 카테고리로 선택한 값에 따라 기능이 실행되도록.
function showProductList(productAry) {
  // 기존목록 비우기 위해 아래 진행
  target.innerHTML = "";
  // 목록을 재출력
  productAry.forEach((elem) => {
    // 저 위에서는 products로 전체 였으나, 이제 걸러지는 productAry로만 값을 지정함
    let tr = document.createElement("tr");
    ["productCode", "productName", "purchasePrice", "category"].forEach(
      (field) => {
        let td = document.createElement("td");
        td.innerText = elem[field]; // 여기서 field는 'productCode', 'productName', 'purchasePrice', 'category'의 값을 동적으로 가져옴  => 원래는 elem.productCode로 각자 표시하기도 함
        tr.appendChild(td); // tr의 자식요소로 td를 등록함
      }
    );
    target.appendChild(tr); // tbody의 자식요소로 tr을 등록함
  });
}
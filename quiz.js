/*
전산표
품목 :
"야채곱창", "바나나우유", "삼각김밥", "도시락", "샌드위치"
수량 :
5, 10, 15, 10, 10

해당 전산표에 맞게 알맞은 값을 출력하는 함수 만들기
*/

/*
answer('품목', 수량) 했을떄 결과값이 알맞게 나와야 함.
둘다 맞다면 : 전산표와 일치합니다 출력
수량만 다르다면 : 전산표와 다릅니다 출력
품목이 다르다면 : 해당 품목 없음 출력
*/

function answer(x, y) {
  let item = ["야채곱창", "바나나우유", "삼각김밥", "도시락", "샌드위치"];
  let num = [5, 10, 15, 10, 10];

  let result = "";

  for (i = 0; i < 5; i++) {
    if (item[i] == x && num[i] == y) {
      result = "전산표와 일치합니다.";
      break;
    } else if (item[i] == x && num[i] != y) {
      result = "전산표와 일치하지 않습니다.";
      break;
    } else if (item[i] != x) {
      result = "해당 품목이 없습니다.";
    }
  }
  return console.log(result);
}

answer("바나나우유", 10);

// ★ 코드 작성 전 생각 해보기.

// 배열과 정수 1개를 파라미터로 전달 받음.
// -> 매개 변수 2개 받기

// 배열의 요소에 각각 10씩 +
// -> 포문을 통해 배열의 요소를 하나씩 꺼내고 그 요소 마다 10 더하기

// 10이 더해진 배열과 정수1개를 비교
// -> 조건문을 통해 비교 (스위치문이 좋지 않을까.. 생각)

// 정수1개와 값이 같은 요소가 있다면 배열의 그 요소를 제외한 배열을
// 반환
// -> 새로운 배열을 만들고 정수값과 다른 것 만 푸쉬하고 새로 만든 배열을 반환시키기

// 없다면 없습니다 출력
// -> default값으로 두면 되진 않을까..?
// */

function checkNum(x, y) {
  let a = [];

  for (i = 0; i < x.length; i++) {
    let value = x[i] + 10;
    if (value !== y) {
      a.push(value);
    }
  }

  switch (x.length) {
    case a.length:
      return y + "값이 없습니다.";

    default:
      return a;
  }
}

const arr = [20, 15, 321, 156, 45, 123, 45, 1, 3, 8, 9];
const a = checkNum(arr, 20);
console.log(a);

/*
solution함수의 매개변수로 배열을 전달 받음.
-> 매개변수 1개 지정하기

짝수와 홀수 구분.
-> 조건문과 연산자로 구분하기

길이를 구한 후 각각의 개수를 요소로 담은 배열을 반환한다.
-> 
새로운 배열 3개 정의하기
.length 프로퍼티 활용하기

*/
/*
ex)
const arr = [1,2,3,4,5]
const a = solution(arr)
console.log(a)

결과값
[2,3]
[짝수의 개수, 홀수의 개수] 
*/

function solution(x) {
  let a = [];
  let b = [];

  for (i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      a.push(x[i]);
    } else {
      b.push(x[i]);
    }
  }
  let c = [a.length, b.length];
  return c;
}

const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 5465, 4984, 1984, 5691561];
const aa = solution(arra);
console.log(aa);

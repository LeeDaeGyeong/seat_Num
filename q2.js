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

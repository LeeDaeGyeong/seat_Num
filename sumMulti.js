// 두 수의 값이 같으면 두 수를 곱하고, 다르면 두 수를 더하는 함수 정의하기

function sumMulti(a, b) {
  if (a - b === 0) {
    return a * b;
  } else {
    return a + b;
  }
}

// 두 수가 같을 떄
console.log(sumMulti(5, 5)); // 25

// 두 수가 다를 때
console.log(sumMulti(5, 15)); // 20

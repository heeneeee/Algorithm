// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.
// 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
// 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

function solution(price, money, count) {
  let answer = 0;
  let num = 0;
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(price * i);
    answer = arr.reduce((a, b) => a + b, 0); // 배열 안에 있는 요소 더하기
  }
  if (money - answer > 0) {
    return 0;
  } else {
    num = Math.abs(money - answer);
  }

  return num;
}

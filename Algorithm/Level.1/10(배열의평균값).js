// 정수 배열 numbers가 매개변수로 주어집니다.
//  numbers의 원소의 평균값을 return하도록
// solution 함수를 완성해주세요.

function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let answer = sum / numbers.length;
  return answer;
}

// function solution(numbers) {
//   return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
// }

// 매개변수에 두 인자를 넣고 요소의 갯수로 나눈다
// acc = 누적값
// cur = 현재요소

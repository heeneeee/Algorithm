// 정수 n을 입력받아 n의 약수를
// 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// for문 이용해서 조건(나머지가 0)으로 나온 값을 더해주기

function solution(n) {
  var sum = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      sum = sum + i;
    }
  }

  return sum;
}

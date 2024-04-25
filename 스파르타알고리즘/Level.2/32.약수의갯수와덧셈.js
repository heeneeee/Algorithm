// 두 정수 left와 right가 매개변수로 주어집니다.
//  left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
//   약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let num = 1; // 약수는 무조건 1과 자기자신의 숫자가 포함 그래서 기본적으로 1은 포함, j는 1을 포함시킬 이유가 없으니 2부터 시작
    for (j = 2; j <= i; j++) {
      // 약수 구하기
      if (i % j == 0) num++;
    }
    // num은 약수의 갯수
    if (num % 2 == 0) answer += i; // 짝수는 더하고
    else answer -= i; // 홀수는 빼고
  }

  return answer;
}

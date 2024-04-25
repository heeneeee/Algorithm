// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 1. 숫자 하나하나 쪼개서 문자열로 만들고
// 2. 정렬
// 3. 다시 합치고
// 4. 숫자로 변환

function solution(n) {
  var answer = [];
  const str = String(n);
  const arr = str.split("");
  answer = Number(arr.sort().reverse().join(""));
  return answer;
}
// ----------------------------------------------------------------
// 마지막에 문자열로 반환된 결과를 숫자로 바꿔주기 위해 1을 곱하여 형변환
// 곱하기 연산자
function solution(n) {
  var answer = [];
  const str = String(n);
  const arr = str.split("");
  answer = arr.sort().reverse().join("") * 1;
  return answer;
}

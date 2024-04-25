// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수,
// solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

function solution(arr) {
  // 배열 길이가 1이면 [-1] 반환
  if (arr.length === 1) {
    return [-1];
  }

  // 최소값 구하기( 최소값 찾아서 새로운 배열로 반환한다)
  const minNum = Math.min(...arr);

  return arr.filter((num) => num !== minNum);
}

// 다른 사람의 풀이
function solution(arr) {
  const min = Math.min(...arr);
  return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];
}

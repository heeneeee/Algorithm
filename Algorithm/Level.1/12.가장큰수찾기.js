// 문제 설명
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array 원소 ≤ 1,000
// array에 중복된 숫자는 없습니다.

// 입출력 예 설명
// 입출력 예 #1

// 1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.
// 입출력 예 #2

// 9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.

// 내 풀이
function solution(array) {
  var answer = [];
  let a = Math.max(...array);
  let b = array.indexOf(a);
  answer.push(a, b);
  return answer;
}

// 다른 사람의 풀이
// function solution(array) {
//     return [Math.max(...array), array.indexOf(Math.max(...array))]
// }

// Math.max(...array) ==> 스프레드 연산자를 사용하는 이유는 배열의 각 요소를 개별적인 인수로 전달하기 위해서이다.
// 예를 들어, array가 [1, 2, 3, 4, 5]라면, Math.max(1, 2, 3, 4, 5)와 동일한 결과를 얻기 위해서는 배열의 각 요소를 개별 인수로 전달해야 한다.

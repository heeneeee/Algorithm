// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  var answer = "";
  //홀수인 경우
  if (s.length % 2 === 1) {
    // s[인덱스]
    answer = s[(s.length - 1) / 2];
  } else {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  }
  return answer;
}

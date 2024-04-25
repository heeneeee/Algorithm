// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때
// 객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수,
// solution을 완성해주세요.

function solution(phone_number) {
  const str = phone_number.slice(0, -4);
  // 인덱스 0부터 -4까지 잘라서 새로운 배열을 만들어 변수에 담는다
  return phone_number.replace(str, "*".repeat(str.length));
}

//replace 메서드로 * 대체하는데 str의 길이만큼 반복하는 방식으로 해결

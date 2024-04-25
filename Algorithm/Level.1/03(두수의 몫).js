// 정수 num1, num2가 매개변수로 주어질 때,
//  num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// function solution(num1, num2) {
//     var answer = 0;
//     return answer;
// }

const solution = (num1, num2) => ~~(num1 / num2);

// 1. parseInt
// 2. Math.floor
// 3. ~~ (double tilde)
// 오늘의 주인공. Math.floor와 같은 기능을 한다.
// ~는 비트 연산의 not이고, 숫자에 ~ 연산을 하면 소수점이 버려진다.
// ~~는 ~를 두 번 실행한 것으로, 숫자에 활용하면 원래 숫자에서 정수부분만 취할 수 있다.
// 참고) 수행 속도는 ~~가 가장 빠르다고 한다.

// ~~ > Math.floor() > parseInt

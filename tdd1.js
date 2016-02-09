export default class Tdd {
  static fizz_buzz(num) {
    if (num == 0) {
      return "知らんがな！！";
    } else if(num % 15 == 0) {
      return "FizzBuzz";
    } else if (num % 3 == 0) {
      return "Fizz";
    } else if (num % 5 == 0) {
      return "Buzz";
    } else {
      return "知らんがな！！";
    }
  }
}

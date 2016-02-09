import assert from 'power-assert';
import Tdd from '../tdd1';

describe('.fizz_buzz', () => {
  it('3の倍数の場合はFizzを返すこと', () => {
    assert(Tdd.fizz_buzz(6) === "Fizz");
  });
  it('5の倍数の場合はBuzzを返すこと', () => {
    assert(Tdd.fizz_buzz(10) === "Buzz");
  });
  it('15の倍数の場合はFizzBuzzを返すこと', () => {
    assert(Tdd.fizz_buzz(30) === "FizzBuzz");
  });
  it('3の倍数でも5の倍数でもない場合は"知らんがな！！"を返すこと', () => {
    assert(Tdd.fizz_buzz(17) === "知らんがな！！");
  });
  it('0の場合は"知らんがな！！"を返すこと', () => {
    assert(Tdd.fizz_buzz(0) === "知らんがな！！");
  });
});

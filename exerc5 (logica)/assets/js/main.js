const number = (numb) =>
  numb % 3 === 0 && numb % 5 === 0
    ? 'FizzBuzz'
    : numb % 3 === 0
    ? 'Fizz'
    : numb % 5 === 0
    ? 'Buzz'
    : numb;

for (let i = 0; i <= 100; i++) {
  console.log(i, number(i));
}

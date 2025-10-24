function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let number1 = random(0, 50);
let number2 = random(0, 50);

const check = (a, b) =>
  a > b ? `${a} é maior que ${b}` : `${b} é maior que ${a}`;

console.log('--------');
console.log(`Números gerados: A:${number1} e B:${number2}`);
console.log('-');
console.log(check(number1, number2));
console.log('--------');

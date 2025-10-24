function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let width = random(100, 500);
let height = random(100, 500);
const ePaisagem = (w, h) => (w > h ? 'Paisagem' : 'Retrato');

console.log('--------');
console.log(`Largura: ${width}px`);
console.log(`Altura: ${height}px`);
console.log('-');
console.log(ePaisagem(width, height));
console.log('--------');

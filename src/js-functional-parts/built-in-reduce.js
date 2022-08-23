const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];

const sum = numbers.reduce((acc, x) => {
  console.log(`acc is ${acc}`);
  console.log(`x is ${x}`);

  return acc + x;
}, 0);

console.log(sum);

const product = numbers.reduce((acc, x) => {
  console.log(`acc is ${acc}`);
  console.log(`x is ${x}`);

  return acc * x;
}, 1);

console.log(product);
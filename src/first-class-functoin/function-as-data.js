const sayHello = name => console.log(`Hello ${name}`);

const sayHello2 = sayHello;
sayHello2('Farzan');

const myFunction = true
  ? () => console.log('First option')
  : () => console.log('Second option');

const DEVELOPMENT = true;

const fetchRealData = () => {
  // time-intensive operation 
}

const fetchFakeData = () => ({
  name: 'John Doe',
  age: 34
});

const fetchedData = DEVELOPMENT
  ? fetchFakeData
  : fetchRealData;

const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 2;
const add5 = x => x + 5;

const myNumber = 42;

const functionsArray = [
  double,
  subtractOne,
  triple,
  add5,
  Math.sqrt
];

let number = 42;

functionsArray.forEach(func => number = func(number));

console.log(number);
const person = {
  name: 'John Doe',
  age: 30,
  hairColor: 'brown',
  eyeColor: 'blue'
};

const careerData = {
  title: 'developer',
  company: 'Microsoft Corporation'
};

const personWithCareerData = {
  ...person,
  ...careerData,
  origin: 'USA'
};

console.log(personWithCareerData);

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [
  ...numbers,
  6
];

console.log(newNumbers);
const employees = [
  {
    name: 'Jane Doe',
    salary: 90000
  },
  {
    name: 'Donald Jones',
    salary: 65000
  },
  {
    name: 'Donna Appleseed',
    salary: 1500000
  },
  {
    name: 'John Smith',
    salary: 250000
  },
];

const makesMoreThanOneMillion = employee => employee.salary > 1000000;

const result = employees.some(makesMoreThanOneMillion);

console.log((result));

const formValues = [
  'Farzan',
  'Nedaei',
  'Main',
  ''
];

const isNotEmpty = string => !!string;

const allFieldsFilled = formValues.every(isNotEmpty);

console.log(allFieldsFilled);

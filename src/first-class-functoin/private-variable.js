const Person = ({ name, age, job }) => {
  let _name = name;
  let _age = age;
  let _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,
    setJob: newJob => _job = newJob
  }
}

const me = Person({ name: 'Farzan', age: 27, job: 'developer' })
console.log(me.getJob());
me.setJob('senior developer');
console.log(me.getJob());
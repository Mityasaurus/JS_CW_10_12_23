const numbers = [5, 10, 15, 20, 25];
const randNumber = Math.random();
console.log(randNumber);

const total = numbers.reduce((acc, number) => acc + number, randNumber);
console.log(total);

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((acc, s) => (acc += s), 0);
console.log(totalSalary);

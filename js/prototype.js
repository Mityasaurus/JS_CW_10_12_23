const objC = {
  c: "This is object C",
};

const objB = Object.create(objC);
objB.b = "This is object B";
const objA = Object.create(objB);
objA.number = 10;
console.log(objA);
console.log(objA.number);
console.log(objA.b);
console.log(objA.c);

console.log(objA.hasOwnProperty("number"));
console.log(objA.hasOwnProperty("b"));
console.log(objA.hasOwnProperty("c"));

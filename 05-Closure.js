// function createFunction() {
//   function multiplyBy2(num) {
//     return num * 2;
//   }
//   return multiplyBy2;
// }
// const generatedFunc = createFunction();
// const result = generatedFunc(3);

// console.log(result); // 6

// function outer() {
//   let counter = 0;
//   function incrementCounter() {
//     counter++;
//     console.log(counter);
//   }
//   incrementCounter();
// }

const outer = () => {
  let counter = 0;
  const incrementCounter = () => counter++;
  incrementCounter();
  // console.log(incrementCounter);
  return incrementCounter;
};

const myNewFunction = outer();
console.log(myNewFunction());
console.log(myNewFunction());

const anotherFunction = outer();
console.log(anotherFunction());
console.log(anotherFunction());

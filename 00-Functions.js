/*
Goes through code line-by-line and rune/executes each line - known as the thread of execution
Saves 'data' like strings and arrays so we can use that data later - in its memory
*/

const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
console.log(output);
console.log(newOutput);

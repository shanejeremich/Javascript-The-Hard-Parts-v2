function copyArrayAndMultiplyBy2(arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);
console.log(result);

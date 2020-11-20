//copyArray is higher order     Data   Insert another Function
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

const multiplyBy2 = num => num * 2;
const squareNum = num => num * num;

console.log(copyArrayAndManipulate([1, 2, 3], multiplyBy2));
console.log(copyArrayAndManipulate([10, 11, 12], squareNum));

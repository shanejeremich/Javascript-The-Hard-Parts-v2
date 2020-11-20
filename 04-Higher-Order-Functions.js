//copyArray is higher order     Data   Insert another Function
// function copyArrayAndManipulate(array, instructions) {
//   const output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(instructions(array[i]));
//   }
//   return output;
// }

function copyArrayAndManipulate(array, instructions) {
  const output = array.map(instructions);
  console.log("output", output);
  return output;
}

const multiplyBy2 = num => num * 2;
const squareNum = num => num * num;

console.log(copyArrayAndManipulate([1, 2, 3], multiplyBy2));
console.log(copyArrayAndManipulate([10, 11, 12], squareNum));

/* 
Higher order functions - Just a term to descrive these functions - any fuction that does it we calll that - but theres nothing different about them inherently

Declarative readable code: Map, filter, reduce - the most readable way to write code to work with data

Codesmith & pro interview prep:mOne of the most popular topics to test in the interview both for codesmith and mid/senior level job interviews

Asynchronous JavaScript: Callbacks are a core aspect of async JavaScript and are under the hood of promises, async/await

 */

// Type JavaScript here and click "Run Code" or press Ctrl + s
// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const mappedArray = [];
  forEach(array, el => mappedArray.push(callback(el)));
  return mappedArray;
}

//Extension 2
function reduce(array, callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
}

//Extension 3
function intersection(arrays) {
  return arrays.reduce((acc, curr) => {
    return curr.filter(el => acc.includes(el));
  });
}

console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
// should log: [5, 15]

//Extension 4
function union(arrays) {
  return arrays.reduce((acc, curr) => {
    const newElements = curr.filter(el => !acc.includes(el));
    return acc.concat(newElements);
  });
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const matchObj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      matchObj[array1[i]] = array2[i];
    }
  }
  return matchObj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  const multiMapObj = {};
  for (let i = 0; i < arrVals.length; i++) {
    multiMapObj[arrVals[i]] = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      multiMapObj[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
    }
  }
  return multiMapObj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

//Extension 7
function objectFilter(obj, callback) {
  const newObj = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) {
      newObj[key] = callback(key);
    }
  }
  return newObj;
}

// const cities = {
//   London: 'LONDON',
//   LA: 'Los Angeles',
//   Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

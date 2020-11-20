/* 
We can generalize functions to make them reusable
*/

// function tenSquared() {
//   return 10 * 10;
// }

const tenSquared = () => 10 * 10;
console.log(tenSquared());

const squareNum = num => num * num;
console.log(squareNum(10));

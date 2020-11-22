// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionStore);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }

// const userFunctionStore = {
//   increment: function () {
//     const add1 = () => this.score++;
//     add1();
//   },
//   login: function () {
//     console.log("Logged In");
//   },
// };

// const user1 = userCreator("Will", 3);
// const user2 = userCreator("Tim", 5);
// user1.increment();
// console.log(user1);
// console.log(user1.__proto__);
// console.log(user1.hasOwnProperty("score"));

// /**
//  * Using keywod new
//  */
function player(name, score) {
  this.name = name;
  this.score = score;
}

console.log(player.prototype); // {} empty object that acts like store for all users
player.prototype.increment = function () {
  this.score++;
};
player.prototype.login = function () {
  console.log("Login");
};

const player1 = new player("Shane", 22);
const player2 = new player("Rachel", 13);
player1.increment();
player1.login();
console.log(player1);
console.log(player2);

function multiplyBy2(num) {
  return num * 2;
}

//  All functions have object property called prototype
const storedNum = (multiplyBy2.prototype.stored = 5);

console.log(multiplyBy2(3));
console.log(multiplyBy2.prototype.stored);
console.log(multiplyBy2.prototype);
console.log(multiplyBy2(storedNum));

class User {
  // prettier-ignore
  constructor(name, score) {  //  function player(name, score) {
    this.name = name;         //    this.name = name;
    this.score = score;       //    this.score = score; }
  }
  // prettier-ignore
  increment() {               // User.prototype.increment
    this.score++;
  }
  login() {
    console.log("login");
  }
}

const user1 = new User("Shane", 23);
const user2 = new User("Rachel", 13);

console.log(user1);
console.log(user2);

user1.increment();

console.log(user1);

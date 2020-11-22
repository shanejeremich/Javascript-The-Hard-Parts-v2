// const user1 = {
//   name: "Will",
//   score: 3,
//   increment: function () {
//     user1.score++;
//   },
// };

// user1.increment();
// console.log(user1);

// const user2 = {};

// user2.name = "Tim";
// user2.score = 6;
// user2.increment = function () {
//   user2.score++;
// };

// console.log(user2);

// const user3 = Object.create(null);

// user3.name = "Eva";
// user3.score = 9;
// user3.increment = function () {
//   user3.score++;
// };

// console.log(user3);

function userCreator(name, score) {
  const newUser = Object.create(null);
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
console.log(user1, user2);

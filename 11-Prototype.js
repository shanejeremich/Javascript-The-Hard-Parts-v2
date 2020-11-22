function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    const add1 = () => this.score++;
    // function add1() {
    //   this.score++;
    // }
    // add1.call(this);
    add1();
  },
  login: function () {
    console.log("Logged In");
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
console.log(user1);
console.log(user1.__proto__);
console.log(user1.hasOwnProperty("score"));

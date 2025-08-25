// Destructuring

// Object destructuring
const user = {
  id: 1,
  name: {
    fastName: "John",
    lastName: "Doe",
  },
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};

const {
  id,
  name: { fastName: fast },
  age,
  address: { city },
} = user;

// Array destructuring
const myFriends = ["John", "Alice", "Bob", "Eve", "Charlie", "David", "Grace"];
const [, , bestFriend, ...rest] = myFriends;

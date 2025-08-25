// Spread Operator
// rest operator
// Destructuring

// Spread Operator
const bros1: string[] = ["John", "Paul", "George", "Ringo"];
const bros2: string[] = ["George", "Paul", "John", "Jonny"];

bros1.push(...bros2);

const mentros1 = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};

const mentros2 = {
  name: "Paul",
  age: 35,
  city: "London",
  country: "UK",
};

const mentrosList = {
  ...mentros1,
  ...mentros2,
};

// rest operator
const friendList = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Hi ${friend} how are you?`);
  });
};

friendList(
  "John",
  "Paul",
  "George",
  "Ringo",
  "John",
  "Paul",
  "George",
  "Ringo"
);

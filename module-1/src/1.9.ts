// Type alias

type Student = {
  name: string;
  age: number;
  phoneNumber?: number;
  address: string;
  courses: string[];
  gender: string;
};

const students1: Student = {
  name: "Vlad",
  age: 23,
  phoneNumber: 123456789,
  address: "Chisinau",
  courses: ["HTML", "CSS", "JS"],
  gender: "Male",
};
const students2: Student = {
  name: "Roman",
  age: 23,
  address: "Chisinau",
  courses: ["HTML", "CSS", "JS"],
  gender: "Male",
};

type UserName = string;
type IsAdmin = boolean;

const userName: UserName = "Vlad";
const isAdmin: IsAdmin = true;

// Function Alias
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;

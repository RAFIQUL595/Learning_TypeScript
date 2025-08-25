// union type

// type FrontendDeveloper =
//   | "juniorDeveloper"
//   | "seniorDeveloper"
//   | "masterDeveloper";

// type FullStackDeveloper =
//   | "juniorDeveloper"
//   | "seniorDeveloper"
//   | "masterDeveloper"
//   | "fullStackDeveloper";

// type Developer = FrontendDeveloper | FullStackDeveloper;

// const newDeveloper: FrontendDeveloper = "juniorDeveloper";

type User = {
  name: string;
  age: number;
  email: string;
  phone: number;
  address: string;
  gender: "male" | "female";
  role?: FrontendDeveloper;
};

const newUser: User = {
  name: "John",
  age: 20,
  email: "john@gmail.com",
  phone: 123456789,
  address: "1234 Main St",
  gender: "male",
  //   role: "juniorDeveloper",
};
console.log(newUser);

// Inter section type

type FrontendDeveloper = {
  skills: string[];
  designation1: "frontendDeveloper";
};
type BackEndDeveloper = {
  skills: string[];
  designation2: "backEndDeveloper";
};

type FullStackDeveloper = FrontendDeveloper & BackEndDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
  skills: ["javascript", "typescript", "ExpressJs", "NodeJs"],
  designation1: "frontendDeveloper",
  designation2: "backEndDeveloper",
};

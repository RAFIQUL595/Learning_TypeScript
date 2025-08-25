// Learning Function
// Normal Function
// Array Function

function odd(num1: number, num2: number = 10): number {
  return num1 + num2;
}

odd(1, 2);

// Array function
const add = (num1: number, num2: number = 10): number => num1 + num2;

// object-->function-->method
const poorUser = {
  name: "Rafiqul Islam",
  balance: 10000,
  addBalance(balance: number): string {
    return `My Balance is ${this.balance + balance}`;
  },
};

// New array Map
const arr: number[] = [1, 2, 3, 4];
const newArray: number[] = arr.map((item: number): number => item * item);

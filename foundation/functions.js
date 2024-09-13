// higher order function
const multiply = (num1) => (num2) => num1 * num2;

const multiplyBy10 = multiply(0);
console.log(multiplyBy10(5));
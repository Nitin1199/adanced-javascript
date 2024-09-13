// compose & pipe

const compose = (func1, func2) => (data) => func1(func2(data));
const pipe = (func1, func2) => (data) => func2(func1(data));

const multiplyBy3 = num => num * 3;
const makePositive = (num) => Math.abs(num);

const multiplyBy3AndComposition = pipe(multiplyBy3, makePositive);

multiplyBy3AndComposition(-50);
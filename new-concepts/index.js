// ES 2017
const card = '2456';

// console.log(card.padStart(2, '*'));
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    address: {
        city: 'New York',
        state: 'NY',
        zip: '940'
    }
};

// console.log(Object.entries(person));
// for (const [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

// spread operator for arrays and objects
const colors = ['red', 'green', 'blue', 'yellow'];
const newColors = [...colors];
// console.log(newColors);
// console.log(person);
const newPerson = {...person, gender: 'Male'};
newPerson.firstName = 'Sala';
newPerson.address.city = 'San Francisco';
newPerson.address.state = 'CA';
// console.log(newPerson);

const numbers = [1,2,3,,5,6,7,9];
console.log(numbers.at(7));

// console.log(numbers.flat());
// const pairs = Object.entries(person);
// console.log(pairs);
// const obj = Object.fromEntries(pairs);
// console.log(obj);
let one= false
// console.log(one ?? person)
// console.log(one || person);

// Destructuring
let myArray = [1, 2, 3];
let [x, y, z] = myArray;
console.log(x); 
console.log(y); 
console.log(z); 

let myObject = {a: 1, b: 2, c: 3};
let {a, b, c} = myObject;
console.log(a); 
console.log(b); 
console.log(c); 

// object.values
const fruits = {
    apple: 10,
    orange: 20,
    grapes: 30,
    pineapple: 40
}

Object.values(fruits)
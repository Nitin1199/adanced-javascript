// pad
console.log('Turtle'.padStart(10));
console.log('Turtle'.padEnd(10));

// Object.values && Object.entries

const obj = {
    name: 'Rudolf',
    age: 35,
    add: 'ssscsdc',
    status: 'active'
};

// for(let i in obj) {
//     console.log(i);
// }

// for(let i of )
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
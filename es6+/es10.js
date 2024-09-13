// flat

let arr = [1,2,[3,4],5,[7,10],9];
// console.log(arr.flat());

const entries = ['asbc', 'sedd', , , , 'desd'];
// console.log(entries.flat());

// trimStart & trimEnd
// console.log('  ajjsjs  '.trimStart())

// formEntries
const users = [['abcd', 10], ['efgh', 15], ['ijkl', 63]];
// console.log(Object.fromEntries(users));

const fruits = ['grapes', 'banana', 'mango'];
for (const iterator of fruits) {
    console.log(iterator);
}

for (const key in fruits) {
    console.log(key, ' ', fruits[key]);
}
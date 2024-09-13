// advanced Arrays
// map

const arr = [1,5,9,3,5,7];

const newArr = arr.map((val) => {return val*2});
const filteredArr = arr.filter(val => val > 4)

console.log(newArr);
console.log(filteredArr);

// reduce
const sum = arr.reduce((acc, curr, index) => {
    return acc+ curr;
}, 0)

console.log(sum);
const a = [1, 2 , 3];
// const b =a
// const b = [].concat(a);
const b = [...a];
b.push(10)

// console.log(a);
// console.log(b);

const obj1 = {
    a:'a',
    b: 'b',
    c: 'c'
}

// const obj2 = obj1;
// const obj2 = {...obj1};
const obj2 = Object.assign({}, obj1);
obj2.d = 'd';

// console.log(obj1);
// console.log(obj2);

// shallow copy - copies only the first level property
const obj = {
    a: "a",
    b: "b",
    c: {
        deep: "I am here"
    }
};

const clone = {...obj};
const clone2 = Object.assign({}, obj);
clone.c.deep = 5;
console.log(obj);
console.log(clone);
console.log(clone2);

// deep copy - performnce implication
const deepClone = JSON.parse(JSON.stringify(obj));
deepClone.c.deep = 8;
console.log(deepClone);


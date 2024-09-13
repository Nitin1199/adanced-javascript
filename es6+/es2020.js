// BigInt
let a = 1n;

console.log(typeof a);
console.log(a.toString());

// Nullish Coalescing operator ??




// optional chaining ?.

const obj = {
    a: 'sd',
    b: 'sde',
    c: {
        d: 'def',
        f: 'des'
    }
};

console.log(obj?.c?.f);
function a() {
    let grandpa  = 'grandpa';
    return function b() {
        let father = 'father';
        return function c() {
            let child = 'child';
            return `${grandpa} -> ${father} -> ${child}`;
        }
    }
}

// let str = a()()();
// console.log(str);

// Closures & Memory
const heavyDuty = function() {
    const arr = new Array(7000).fill(5);
    console.log('created');
    return function(index) {
        return arr[index];
    }
}

// let fns = heavyDuty();
// console.log(fns(5670));
// console.log(fns(670));
// console.log(fns(850));

// Excercise
const arr = [1,2,3,4];
for(var i = 0; i < arr.length; i++) {
    (function(curr) {
        setTimeout(() => {
        console.log(`I am at index ${arr[curr]}`);
        }, 3000);
    })(i)
}
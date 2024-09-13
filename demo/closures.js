// function a() {
//     let grandpa  = 'grandpa 12';
//     return function b() {
//         let father = 'father 12';
//         return function c() {
//             let child = 'child 12';
//             return `${grandpa} -> ${father} -> ${child}`;
//         }
//     }
// }

// let str = a()()();
// console.log(str);
// console.log(str);

// Excercise
// const arr = [1,2,3,4];
// for(var i = 0; i < arr.length; i++) {
//     (function(curr) {
//         setTimeout(() => {
//         console.log(`I am at index ${arr[curr]}`);
//         }, 3000);
//     })(i)
// }

// function x() {
//     for(var i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(function() {
//                 console.log(i);
//             }, i*1000);
//         }
//         close(i);
//     }
//     console.log('End of Fn');
// }

// x();

// ---------------------------------------------//
// function outest() {
//     var c = 20;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// outest()("helloworld")();

// Data hiding

// function counter() {
//     var count = 0;
//     function incrementCount() {
//         count++;
//         console.log(count);
//     }
//     return incrementCount;
// }



// const counter1 = counter();
// counter1();
// counter1();

// const counter2 = counter();
// counter2();


function add(a,b, a) {
    return a+b;
}

function add(a) {
    return function  add2(b) {
        return a+b;;
    }
}

const addBy2 = add(2);

console.log(addBy2(5));
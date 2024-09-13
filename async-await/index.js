// async + await -> used to handle promises
/**
 * async - is a keyword that is used before a function to create a async function (always return promise)
 * await - is a keyword that can only be used inside a asunc function
 */ 

const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(
        'Promise Resolved Value'
    ), 10000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(
        'Promise Resolved Value 2'
    ), 50000);
})
// handling promises before async await
// function getData() {
//     // JS Engine will not wait for the promise to be resolved
//     console.log(Date.now());
//     p.then(res => {
//         console.log(res, Date.now());
//         p2.then((data) => {
//             console.log(data, Date.now())
//         });
//     });
// };

// handling promise with async await
// async function handlePromise() {
//     // Js engine was waiting for promise to be resolved
//     try {
//         console.log('before')
//         const val = await p;
//         console.log(val);
//         console.log('Niting promise');
//         // fetch()
//         const val2 = await p2;
//         console.log(val2);
//         console.log('Niting promise 2');
//     } catch (error) {
//         console.log(error);
//     }
// }

// handlePromise();

// console.log(handlePromise())
// getData()
// const data = getData();
// data.then(res => console.log(res)); 

for await (const a of Promise.all([p, p2])) {
    console.log(a);
}
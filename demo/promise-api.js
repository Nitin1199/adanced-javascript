const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P1 Success'), 3000);
    setTimeout(() => reject('P1 Fail'), 3000);
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P2 Success'), 1000);
    setTimeout(() => reject('P2 Fail'), 1000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P3 Success'), 2000);
    setTimeout(() => reject('P3 Fail'), 2000);
});

async function getResult() {
    // const result = await Promise.all([p1, p2, p3]);
    // const result = await Promise.allSettled([p1, p2, p3]);
    // const result = await Promise.race([p1, p2, p3]);
    const result = await Promise.any([p1, p2, p3]);
    console.log(result);
}


getResult().catch((err) => {
    console.log(err);
    console.log(err.errors);
});

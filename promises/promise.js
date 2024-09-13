// Sequential, Parallel, and Race

const promisify = (item, delay) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {resolve(item)}, delay);
    })

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
    const [op1, op2, op3] = await Promise.all([a(), b(), c()]);
    return `Paralle is done : ${op1} ${op2} ${op3}`;
}

// parallel().then(console.log)

async function race() {
    const op1 = await Promise.race([a(), b(), c()])
    return `race is done: ${op1}`
}

// race().then(console.log)

async function sequence() {
    const op1 = await a();
    const op2 = await b();
    const op3 = await c();
    return `Sequennce is done: ${op1} ${op2} ${op3}`;
}

sequence().then(console.log)

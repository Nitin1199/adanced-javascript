// debugging
const arr = [4,7,5,7,6,1]
const reducedValue = arr.reduce((acc, curr)=> {
    console.log(acc);
    console.log(curr);
    debugger;
    return acc + curr;
}, 0)

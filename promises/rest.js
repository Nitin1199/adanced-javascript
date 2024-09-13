const animals ={
    tiger: 23,
    lion: 35,
    monkey: 12
}

const {tiger, ...rest} = animals;
console.log(tiger);
console.log(rest);
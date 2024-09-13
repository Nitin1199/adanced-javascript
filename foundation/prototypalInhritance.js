const dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        return `I am ${this.name}, the breather of fire.`
    }
}

// console.log(dragon.sing());

const lizard = {
    name: 'kiki',
    fight() {
        return 1;
    }
}

lizard.__proto__ = dragon;   // efficiency issue while using __proto__
// console.log(lizard.sing());
// console.log(dragon.isPrototypeOf(lizard));

// for(let prop in lizard) {
//     if(lizard.hasOwnProperty(prop)) {
//         console.log(prop);
//     }
// }

const human = {
    mortal: true
}

// use Object.create instead of __proto__
const socrates = Object.create(human);
socrates.age = 45;
// console.log(socrates);

// for(let prop in socrates) {
//     console.log(prop);
//     // if(lizard.hasOwnProperty(prop)) {
//     // }
// }

// HW 
Date.prototype.lastYear = function() {
    // console.log(this.value);
    return this.getFullYear() - 1;
}
console.log(new Date('1990-10-10').lastYear());

Array.prototype.map = function() {
    let arr = [];
    for(let i = 0; i< this.length; i++) {
        arr.push(this[i]+ '[]');
    }
    return arr;
}

console.log([1, 2, 3].map());

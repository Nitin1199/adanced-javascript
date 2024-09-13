// const obj = {
//     name:"ram",
//     sing() {
//         return 'lalala ' + this.name;
//     },
//     singsAgain() {
//         return this.sing() + '!';
//     }
// }

// console.log(obj.singsAgain());
// name = 'admin'
// function importedPerson() {
//     console.log(this.name + '!');
// }

// const obj1 = {
//     name: 'user1',
//     importedPerson
// }

// const obj2 = {
//     name: 'user2',
//     importedPerson
// }

// importedPerson();
// obj1.importedPerson();
// obj2.importedPerson();

const obj = {
    name:"ram",
    sing() {
        console.log('a ', this);
        let newFn = function() {      // arrow function are lexically scoped where as normal functions are not
            console.log('b', this);
        }
        newFn()
    }
}

const obj2 = {
    name:"ram",
    sing() {
        console.log('a ', this);
        let newFn = () => {      // arrow function are lexically scoped where as normal functions are not
            console.log('b', this);
        }
        newFn()
    }
}

obj2.sing();
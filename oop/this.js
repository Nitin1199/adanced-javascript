// new binding this - represent object which is instantiated

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Pearson', 10);
// console.log(person1);

// implicit binding - represent calling object (which is on the left side of dot)
const obj = {
    name: 'Niiititit',
    age: 23,
    details() {
        return `${this.name} is ${this.age} of age`
    }
}

console.log(obj.details());

// explicit binding - bind this to something
const person2 = {
    name: 'Niiititit',
    age: 23,
    hi: function() {
        console.log('hi ' + this.setTimeout);
    }.bind(global)
}

// person2.hi()

// arrow function - bind to where function is written

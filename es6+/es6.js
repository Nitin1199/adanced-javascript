// object properties
const user = {
    name : 'nitin',
}
console.log(user);

// or new ways to add properties
const user_name = 12
const object = {
    [user_name]: 'Abcd',
    ['ray' + 'smith'] : 'hihi',
    [1+2] : 'ass'
};

console.log(object);
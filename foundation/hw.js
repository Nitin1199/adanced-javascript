const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
    obj1.value = "d"
    console.log(obj1.value);
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); 
console.log(string);
console.log(obj1.value);
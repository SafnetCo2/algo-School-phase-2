//program to display value a is used before being declared
a = 5;
console.log(a);
var a;

//same as
var a;
a = 5;
console.log(a);

var a = 4;
function greet() {
    b = 'hello there';
    console.log(b);
    var b;

}
greet();
// console.log(b);//output Uncaught ReferenceError: b is not defined
// In the above example, variable b is hoisted to the top of the function greet and becomes a local variable.Hence b is only accessible inside the function. b does not become a global variable.

//program to display my name
//declare function  sayName
function sayName() {
    console.log('Josephine');

}
sayName();
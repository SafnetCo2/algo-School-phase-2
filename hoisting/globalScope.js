//A variable declared at the top of a program or outside of a function is considered a global scope variable.
let a = 'Hello World';

function greet() {
    console.log(a);
}
greet();
//a is declared on top of the function and can be used anywhere

// you can still change a global scope so not good practice to use it

let ab = 'Hello';
function greet() {
    ab = 3;
}


greet();
console.log(ab);





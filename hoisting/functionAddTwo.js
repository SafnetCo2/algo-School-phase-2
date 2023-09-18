function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(3, 5);

//return 
function add(a, b) {
    return a + b;
}
//get inputs
let number1 = parseInt(prompt('enter first number'));
let number2 =parseInt( prompt('enter second number'));
//call the function
let result = add(number1, number2);
//display
console.log(result);
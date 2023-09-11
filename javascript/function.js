function sayHello(name) {
    console.log('------------');
    console.log('hello' + name + '!');
}
sayHello('bob');
sayHello('beth');


function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}
let tax = calculateTax(100);
console.log(tax);
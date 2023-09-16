// display more parameters in a setTimeout method to diplay a block of code in a specifiend time

function greet(firstName, lastName) {
    console.log('Hello' + ' ' + firstName + ' ' + lastName);


}
//pass argument to setTimeout

setTimeout(greet, 3000, 'Josephine', 'John');
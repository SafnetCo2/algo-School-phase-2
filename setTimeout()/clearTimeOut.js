
// program to stop the setTimeout() method
let count = 0;
//create function

function increaseCount() {
    //++ 1
    count += 1;
    console.log(count);
}
let id = setTimeout(increaseCount, 3000);
//clear timeout
clearTimeout(id);
console.log('setTimeout is stopped.');


//program to display a name
function greet(name, lastname) {
    console.log('Hello' + ' ' + name + ' ' + lastname);
}
//passing argument to setTimeout
setTimeout(greet, 1000, 'Josephine');





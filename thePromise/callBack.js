function one() {
    console.log('function 1');
}
function two() {
    console.log('function two');

}
function three() {
    console.log('third function');
}
setTimeout(one, 3000);//one is called after 3 seconds

two();
three();
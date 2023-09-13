let a = 1;
let b = 2;
setTimeout(function () {
    console.log('async');
}, 100);

console.log('sychronous');
console.log(a);
console.log(b);

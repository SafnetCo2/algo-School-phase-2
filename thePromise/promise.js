//promise is used to handly asynchronous operation to acertain if its success or not
//appears ib 3states pend,fulfiled or failedconst


const count = true;
let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve('count is resolved ');
    } else {
        reject('no count value is resolved');
    }
});
console.log(countValue);
/**In the above program, a Promise object is created that takes two functions: resolve() and reject(). resolve() is used if the process is successful and reject() is used when an error occurs in the promise.

The promise is resolved if the value of count is true. */

let countValues = new Promise(function (resolve, reject) {
    resolve('promise resolved');
});
//excute if promise is resolved successfully
countValues.then(function successValue(result) {
    console.log(result);
})
.then(function successValue2() {
    console.log('you can operate multiple task using .then');
});
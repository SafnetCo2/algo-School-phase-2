//promise in javascript is used to handle asynchronous function
//finds out if the asynchronous functions is fulfilled
// it may be in a pending, or fullfilled or rejected state

const count = true;
let countValue = new Promise(function (resolved, rejected) {
    if (count) {
        resolved('There is a count');
    } else {
        rejected('There is no count')
    }
    
});
console.log(countValue);

//promise chaininig
/** can be helpfull when you handle more asynchronous task
 * You can perform an operation after a promise is resolved using methods then(), catch() and finally().

// returns a promise

let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

//returns a promise
let coun

 */
//returns a promise
let countValues = new Promise(function (resolve, reject) {
    resolve('promise is resolves');
});
countValues
    .then(function successValue(result) {
        console.log(result);
    })
    .then(function successValue1() {
        console.log('.then can be used to chain multiple functions to the promise');
    
    });





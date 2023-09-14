/**JavaScript catch() method
The catch() method is used with the callback when the promise is rejected or if an error occurs. For example, */
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('promise rejected');
});
//excutes when promise is succesfully resolved
countValue
    .then(function successValue(result) {
        console.log(result);
    },
    )
    //excutes if there is an error value
    .catch(function errorValue(result) {
        console.log(result);
    });
    
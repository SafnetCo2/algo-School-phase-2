// let promise = new Promise(function (resolve, reject) {
//     resolve('promise resolved');
    
// });
// promise
//     .then(function (successMessage) {
//         console.log(successMessage);
//     }), function (error) {
//         console.log(error);
//     };

let promise = new Promise(function (resolve, reject) {
    reject('console .log this message promise reject');
});
promise
    .then(function (resolvedMessage) {
        console.log(resolvedMessage);
    })
    .catch(function (errorMessage) {
        console.log(errorMessage);
    });

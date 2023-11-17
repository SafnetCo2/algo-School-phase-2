/**A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. 
 * When the task completes, you either fulfill your promise or fail to do so. 
 * Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. 
 * These are methods used to determine the outcome of the promise. The syntax looks like this:

c

}); */

// const makeServerRequest = new ServerRequest((resolve, reject) => {
    
// });

const myPromise = new Promise((resolve, reject) => {
    if (condition_here) {
        resolve('promise is fulfilled');
    } else {
        reject('not fulfilled');
    }
});
myPromise.then(result => console.log(result));
myPromise.catch(error => console.log(error));
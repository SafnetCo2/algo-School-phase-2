const arr1 = ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY'];
let arr2;
//Copy all contents of arr1 into another array arr2 using the spread operator.
arr2 = [...arr1];
console.log(arr2);
/**Use the Spread Operator to Evaluate Arrays In-Place
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
maximus would have a value of 89.

We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
maximus would have a value of 89.

...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. For example:

const spreaded = [...arr];
However, the following code will not work:

const spreaded = ...arr; */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    // Only change code above this line
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)

    }

    return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);
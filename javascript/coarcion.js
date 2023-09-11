// let a = 7;
// let b = '6';
// let c = (a + b);
// console.log('answer: ' + c);
//output 76 concatinates the two numbers
// use parseInt
let d = 7;
let x = '6';
x = parseInt(x);
let y= (d + x);
console.log('answer: ' + y);
//output is 13

let f= parseInt('bob', 10);
let e = isNaN(f);
console.log(f);
console.log(e);
//NaN str bob is not a number
//true

/*Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values */
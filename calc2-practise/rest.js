/**Use the Rest Parameter with Function Parameters
In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function. */
const howMany = (...args) => 'You have passed' + args.length + 'arguments';
console.log(howMany(1, 2, 4));
console.log(howMany('string', null, [1, 2, 3, 4], {}));
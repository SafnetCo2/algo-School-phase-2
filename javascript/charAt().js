const str = 'hello world';
let index1 = str.charAt(1);
console.log('the character at index1 is : ' + index1);
//The charAt() method returns the character at the specified index in a string.

//syntax
//str.charAt(index);


// string declaration
const string1 = "Hello World!";

// finding character at index 8
let index8 = string1.charAt(8);

console.log("Character at index 8 is " + index8);
/**In the above program, string1.charAt(8) returns the character of the given string which is at index 8.

Since, the indexing of a string starts from 0, the index of "r" is 8. Therefore, index8 returns "r". */



// non integer and charAt()
//define the srting
const nonIntegerString = 'Hello Josephine';
//find the charater at index 6.3
let result1 = nonIntegerString.charAt(6.3);

console.log('character at index 6.3 is : ' + result1);
//find the character at index 6.9
let result2 = nonIntegerString.charAt(6.9);
console.log('character at index  6.9 is: ' + result2);
/**Here, the non-integer index values 6.3 and 6.9 are converted to the nearest integer index 6. So both string.charAt(6.3) and string.charAt(6.9) return "W" just like string.charAt(6).

 */

















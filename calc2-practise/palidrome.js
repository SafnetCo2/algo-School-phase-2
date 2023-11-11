let palidrome = function (word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCasesta();
    //console.log(start, end);

    let flip = end.split('')
    reverse().join('');
    return (start == flip);
}
console.log("radar");
console.log("redder");
console.log("window");
/*
function isPalindrome(str) {
    // convert the string to lowercase
    str = str.toLowerCase();
    // reverse the string
    let reversed = str.split('').reverse().join('');
    // compare the string with its reversed version
    return str === reversed;
}
console.log(isPalindrome('nurses run'));
console.log(isPalindrome('madam'));
*/
function palidrome(str) {
    str.toLowerCase();
    let reversed = str.split('').reverse().join();
    return str === reversed;
} console.log(palidrome("raar"));
console.log(palidrome("reder"));
console.log("window");
function palindrome(str) {
    str.toLowerCase();
    let reversed = str.split('').reverse().join();
    return str === reversed;
};
palindrome("eye");
palindrome("_eye");
palindrome("race car");
//size of array
let num = 4;
//input array
let arr = [1,2,3,4];
//splited array;
let arr1=arr.slice(0, num);
let arr2 = arr.slice(num,num+arr.length);
console.log(arr1);
console.log(num);
//toString
//transform an object into a String.
// Typically, it is used to construct a string containing the information on an object that can be printed, and we can redefine it for a certain class

let names = ['Many','mangoes','apple','oranges','milk','bananas','citrus','lemon','sandra'];
let stringNames= names.toString();





function boolT(a){
    if(a)
    return 'yes';
return 'no';
}
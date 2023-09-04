
// const  arr = new Array();
// arr.length =5;
// arr.fill(5);
// arr.push(4);
// arr.shift();// remove first
// arr.unshift(6);//add element
// arr.pop();

// console.log(arr);




const arr = [1,2,4,5,6,7];
arr.splice(5);
console.log(arr);
//push adds zero or more eements in the end of an element an array 
let city = ['madrid','Moscow','Jersey','Kathmandu'];
//add london
city.push('London');

console.log(city);

//pop removes last elemnt in an array
let removedCity = ['madrid','Moscow','Jersey','Kathmandu'];
//pop last
removedCity.pop();

console.log(removedCity);


function repeatStr(n,s) {
    return s.repeat(n);
    
}
console.log(repeatStr);

function basicOp(operation, value1, value2){
    return eval(`${value1} ${operation} ${value2}`);
}
console.log(1+2);
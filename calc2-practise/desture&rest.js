// const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a, b);


function firstRemoveTwo(list) {
    let [, ,...args] = list;
    return args;
    
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutTwo = firstRemoveTwo(source);
console.log(firstRemoveTwo);
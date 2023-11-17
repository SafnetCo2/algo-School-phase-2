const greet = (name = 'anonymous') => 
    'Hello ' + name;

console.log(greet('john'));
const sirGreet = (name = 'Anonymous') => 'Hello' +''+ name;
console.log(sirGreet('Goodmorning Sir'));
console.log(sirGreet());
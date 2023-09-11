
let image = 'https://images.unsplash.com/photo-1693418161641-99928097b5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60';
const ourFruit = document.getElementById('body').style.backgroundImage = `url(${image})`;

console.log(ourFruit);
//const ourFruits = document.querySelectorAll('li');
//console.log(ourFruits);
//given name Josephine
//count vowels with js

function fullname(fname, lastname) {
    let greet = 'Hello whats your names?';
    function fullnames() {
        console.log(`${greet} ${fname} ${lastname}`);
    }
    fullnames();
}
console.log(fullname("Michael", "Jackson"));

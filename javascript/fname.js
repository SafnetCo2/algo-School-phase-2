function fullname(firstname, lastName) {
    let greet = 'Hello whats your name?';
    function fullnames() {
        console.log(`${greet} ${firstname} ${lastName}`);
    }
    fullnames();
}
console.log(fullname('Mickey', 'Mouse'));



//vowels
function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }
}
return vowelsCount();


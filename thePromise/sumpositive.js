let sum = 0;
number = parseInt(prompt('enter a number'));
while (number >= 0) {
    sum += number;

    number = parseInt(prompt('another number'));
}
//display a number
console.log(`The total sum is: ${sum}`);
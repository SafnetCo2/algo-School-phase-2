let printTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printTwo = () => {
            return i;
        };
    }
}
    
console.log(printTwo());
/**Here the console will display the value 2, and an error that i is not defined.

i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement. */
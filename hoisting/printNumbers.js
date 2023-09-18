function countNumber(number) {
    console.log(number);
    const newNumber = number - 1;
    if (newNumber > 0) {
        countNumber(newNumber);
    }
}
countNumber(5);
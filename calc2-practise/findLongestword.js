function findLongestWordLength(s) {
    return s
        .split(' ')
        .reduce((longest, word) => Math.max(longest, word.length), 0);
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
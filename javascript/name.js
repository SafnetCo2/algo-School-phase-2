let character = prompt('Enter your name');
if (character === 'a' ||
    character === 'e' ||
    character === 'i' ||
    character === 'o' ||
    character === 'u');

{
    alert('vowel');
}
{
    alert('consonant');
}
    


const vowelsCount = (str) => {
    const vowels = ['a', 'e', 'o', 'i', 'u'];
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};
vowelsCount();
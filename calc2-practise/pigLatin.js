/*function pigLatin(str) {
    let vowel = 'aeiou';
    let pigged = '';

    for (let i = 0; i < str.length; i++){
        if (vowel.includes(str[0])) {
            pigged =st+ 'jay';
            
        } else if (vowel.includes(str[i])) {
            let part1 = str.slice(0, i);
            let part2 = str.slice(i);
            pigged = part1 + part2 + 'ay';
            break;

        }
    }
    return pigged;
}
console.log(pigLatin("consonant"));


function translatePigLatin(str) {
    // matches one or more occurrences of consonants
    var consonatns = str.match(/[^aeiou]+/i)[0];
    // check if the first letter is a vowel
    var isVowel = /[aeiou]/i.test(str[0]);
    if (isVowel) {
        str = str + "way";
    } else {
        str =
            // remove the consonants from the begins of the str
            str.slice(consonatns.length) +
            // add the removed consonants + "ay"
            consonatns + "ay";
    }
    return str;
}

function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
*/

//pair elements

function pairElement(str) {
    const pairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    };
    return str
        .split('')
        .map(x => [x, pairs[x]]);
}
pairElement('GCG')

}





function myReplace(str, before, after) {
    //check if first character is capital or lower case
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substring(1);
    } else {
        after = after[0].toLowerCase() + after.substring(1);
    }
    return str.replace(before, after);
}
myReplace('this is sa a a a aicecrean aook')












function pigLatin(str) {
    //match with vowels
    let consonant = str.match(/[^aeiou]+/i)[0];
    //check if its a vowel
    let isVowel = /[aeiou]/i.test(str[0]);
    if (isVowel) {
        str = str + 'way';
    } else {
        str = str.slice(consonant.length) + consonant + 'ay';
    }

    return str;
}
pigLatin('consonant');





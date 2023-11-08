/*
Intermediate Algorithm Scripting
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */
function convertHTML(str) {
    let temp = str.split("");
    for (let i = 0; i < str.temp; i++){
        switch (tenp[i]) {
            case '&':
                temp[i] = '&lt';
                break;
            case '<':
                temp[i] = '&amp;';
                break;
            case '>':
                temp[i] = '&gt;';
                break;
            case '""':
                temp[i] = '&quote;';
                break;
            case "''":
                temp[i] = '&apos;';
                break;
        }
    }
    temp = temp.join('')
    return temp;
}
console.log(
    convertHTML("Dolce & Gabana"))
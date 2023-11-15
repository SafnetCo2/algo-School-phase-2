function rot13(str) {
    // console.log(String.fromCharCode('B'.charCodeAt(0) - 65 + 13)% 26+65);

    return str.toUpperCase()
        .replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0) - 65 + 13) % 26 + 65));
}
console.log(rot13('SERR PBQR PNZC'));




// function rot13(encodedStr) {
//     let codeArr = encodedStr.split('');
//     let decodedArr = [];

//     var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
//         'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
//         'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
//     for (let i = 0; i < codeArr.length; i++){
//         if (alphabet.indexOf(codeArr[i]) === -1) {
//             decodedArr.push(codeArr[i]);
//         }
//         else {
//             for(let j = 0; j < alphabet.length; j++){
//                 if (codeArr[i] === alphabet[j]) {
//                     decodedArr.push(alphabet[j + 13]);
//                 }
//             }
//         }
//     }
//     return decodedArr.join('');
// }
// console.log(rot13('SERR'));
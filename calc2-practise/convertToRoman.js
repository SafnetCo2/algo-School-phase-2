function convertToRoman(num) {
    let romanChartable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        
        XC: 90,
        
        
        L: 50,
        XL: 40,
        IX: 9,
        X: 10,
        V: 5,
        IV: 4,
        I: 1



    };
    let cummulative = '';
    for (let key in romanChartable) {
        let numValue = romanChartable[key];
    
        //console.log('key', key);
        //console.log('value', romanToNum[key]);
        while (numValue <= num) {
            num -= numValue;
            cummulative += key;
        }
        
    }
    return cummulative;
}
console.log(convertToRoman(3));
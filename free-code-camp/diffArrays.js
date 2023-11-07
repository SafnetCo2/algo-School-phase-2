//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    return [...diffArray(arr1, arr2), ...diff(arr2, arr1)];
    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }

}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
function diffArray(arr1, arr2) {
    var newArr = (arr1.concat(arr2)).sort();
    return newArr.filter(function (currentValue, i, arr) {
        return (i === 0 || arr[i] != arr[i - 1]) && (arr.length == i + 1 || arr[i] != arr[i + 1]);
    });
}
function diffArray(arr1, arr2) {
    const difference = new Set(arr1);
    arr2.forEach((ele) =>
        difference.has(ele) ? difference.delete(ele) : difference.add(ele)
    );
    return Array.from(difference);
}
function sumFibs(num) {
    let prevNumber = 0;
    let currentValue = 1;
    let result = 0;
    while (currentValue <= num) {
        if (currentValue = currNumber - prevNumber);
    }
    return result;
}



function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

// test here
sumFibs(4);


function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= (n / 2); i++) {
        if (n % i === 0) {
            return false
        }
    }
}

function isPrimes(n) {
    if (n <= 1)
        return false;
    for (let i = 2; i <= (n / 2); i++){
        if (n % i === 0) {
            return false;
        }
    }
} 
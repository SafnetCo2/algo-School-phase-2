/**Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */

function diffArray(arr1, arr2) {
    let arr1Filter = arr1.filter(element => !arr2.includes(element));
    let arr2Filter = arr2.filter(element => !arr1.includes(element));
    let newArr = arr1Filter.concat(arr2Filter);
    console.log(newArr);


}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

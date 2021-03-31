const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function(expected, actual) {
  if (eqArrays(expected, actual)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

let theArr = [];
let flatten = function(arr) {
  for (let j = 0; j < arr.length; j++) {
      if (Array.isArray(arr[j])) {
        for (let k = 0; k < arr[j].length; k++){
          theArr.push(arr[j][k]);
        } 
      } else {
          theArr.push(arr[j]);
      }
  }
return theArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]))
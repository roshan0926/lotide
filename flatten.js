const eqArrays = function(arr1, arr2) {
  let arrValue = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      arrValue = false;
      return arrValue;
    } else {
      arrValue = true;
    }
  }
  return arrValue;
};

const assertArraysEqual = function(arrValue) {
  if (arrValue) {
    console.log(`✅✅✅Assertion Passed: ${arrValue}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arrValue}`);
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
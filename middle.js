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

const middle = function(array) {
  const middleNumber = [];
  const middleIndex = Math.floor((array.length - 1) / 2);
  if (array.length <= 2) {
    return middleNumber;
  }
  if (array.length % 2 !== 0) {
    middleNumber.push(array[middleIndex]);
  } else {
    middleNumber.push(array[middleIndex], array[middleIndex + 1]);
  }
  return middleNumber;
};


console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([10, 20, 30, 40]));
console.log(middle([10, 20, 30, 40, 50, 60]));


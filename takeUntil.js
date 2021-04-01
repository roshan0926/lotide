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

const takeUntil = function(array, callback) {
  const returnArr = [];
  for (const element of array) {
    if (!callback(element)) {
      returnArr.push(element);
    } else {
      return returnArr;
    }
  }
  return returnArr;
};




// input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//expected output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
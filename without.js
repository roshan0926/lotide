
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


const without = function(source, itemsToRemove) {
  let removed = []
  for (let j = 0; j < source.length; j++) {
    for (let k = 0; k < itemsToRemove.length; k++){
      if (source[j] !== itemsToRemove[k]) {
        removed.push(source[j])
      }
    }
  }
  return removed;
};

console.log(without([1, 2, 3], [1]))// => [2, 3]

 
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



// create without function
// 2 paramitors 'source' and 'itemsToRemove'
// create an if statement
// inside the is ftatement loop over the 2 paramitors, 
// if a value in itemsToRemove matches a value in source remove it

/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/
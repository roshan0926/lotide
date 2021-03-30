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


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));



/*

Implement assertArraysEqual which will take
in two arrays and console.log an appropriate message to the console.
The message will be similar to that of assertEqual. In fact, you could refer
to the code for assertEqual to help you implement this. Instead of doing a simple
=== check though, this assertion function will make use of your eqArrays function for array comparison.


*/
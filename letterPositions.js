const letterPositions = function(sentence) {
  const results = {};
  const noSpace = sentence.split(' ').join('')
  for (let i = 0; i < noSpace.length; i++) {
    if (!results[noSpace[i]]) {
      results[noSpace[i]]=[]
      results[noSpace[i]].push(i)
    } else {
      results[noSpace[i]].push(i)
    }
  }
  return results;
};

// console.log(letterPositions("lighthouse in the house"))



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



assertArraysEqual(letterPositions('hello world').e, [1])
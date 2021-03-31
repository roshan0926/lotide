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


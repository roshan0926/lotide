const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(str) {
  const noSpace = str.split(' ').join('');
  const letterList = {};
  for (const letter of noSpace) {
    if (!letterList[letter]) letterList[letter] = 0;
    letterList[letter] += 1;
  }
  return letterList;
};
console.log(countLetters('lighthouse in the house'))

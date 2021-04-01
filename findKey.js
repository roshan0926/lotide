const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};
const findKey = (object, callback) => {
  // console.log('random str', callback(object['Akelarre']))
  for (const ele in object) {
    if (callback(object[`${ele}`])) {
    // console.log('ele is: ', ele)
      return ele
    }
  }
  return undefined;
};

const objList = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
console.log(findKey(objList, x => x.stars === 2))
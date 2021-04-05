const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  let keyArr = Object.keys(object1);
  for (let key of keyArr) {
    if (Array.isArray(object1[key])) {
      let tempResult = eqArrays(object1[key], object2[key]);
      if (tempResult === false) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
        return false;
      }
  };
  return true;
};

module.exports = eqObjects;
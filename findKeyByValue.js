const findKeyByValue = function(obj, val) {
  for (let keyName in obj) {
    if (obj[keyName] === val) {
      return keyName;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
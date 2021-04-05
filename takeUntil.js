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

module.exports = takeUntil;
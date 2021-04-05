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
module.exports = middle;



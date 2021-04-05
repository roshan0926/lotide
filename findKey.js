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

module.exports = findKey;
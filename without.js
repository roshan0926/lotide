const without = function(source, itemsToRemove) {
  let removed = []
  for (let j = 0; j < source.length; j++) {
    for (let k = 0; k < itemsToRemove.length; k++){
      if (source[j] !== itemsToRemove[k]) {
        removed.push(source[j])
      }
    }
  }
  return removed;
};
module.exports = without;

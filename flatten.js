
let flatten = function(arr) {
  let theArr = [];
  for (let j = 0; j < arr.length; j++) {
      if (Array.isArray(arr[j])) {
        for (let k = 0; k < arr[j].length; k++){
          theArr.push(arr[j][k]);
        } 
      } else {
          theArr.push(arr[j]);
      }
  }
return theArr;
};

module.exports = flatten;
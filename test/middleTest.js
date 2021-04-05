const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]), '');
assertArraysEqual(middle([1, 2]), '');
assertArraysEqual(middle([10, 20, 30, 40]), [20, 30]);
assertArraysEqual(middle([10, 20, 30, 40, 50, 60]), [30, 40]);

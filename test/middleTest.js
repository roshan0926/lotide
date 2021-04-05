const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
    it("returns [] for [1]", () => {
      assert.deepEqual(middle([1]), []);
    });
    it("returns [] for [1, 2]", () => {
      assert.deepEqual(middle([1, 2]), []); 
    });
    it("returns [20, 30] for [10, 20, 30, 40]", () => {
      assert.deepEqual(middle([10, 20, 30, 40]), [20, 30]); 
    });
  });

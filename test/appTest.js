const assert = require('chai').assert;
const app = require('../app');

describe('addNum()', function() {
    it('addNum should equal 5', function() {
        let result = app.addNum(2,3)
        assert.equal(result, 5);
    });

    it('addNum should return type number', function() {
        let result = app.addNum(2, 3);
        assert.typeOf(result, 'number');
    });
})
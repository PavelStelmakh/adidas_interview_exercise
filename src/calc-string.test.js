import calcString from './calc-string.js';
import * as assert from 'assert';

describe('calc-string', () => {
    it('should return 2 if string is "1 + 1"', () => {
        assert.equal(calcString('1 + 1'), 2);
    });

    it('should return 0 if string is "1 - 1"', () => {
        assert.equal(calcString('1 - 1'), 0);
    });

    it('should return 4 if string is "2+ 2"', () => {
        assert.equal(calcString('2+ 2'), 4);
    });

    it('should return 4 if string is "2+ 5-3"', () => {
        assert.equal(calcString('2+ 5-3'), 4);
    });

    it('should return -2 if string is "2+ 5-3 -6"', () => {
        assert.equal(calcString('2+ 5-3 -6'), -2);
    });

    it('should return 1 if string is "1"', () => {
        assert.equal(calcString('1'), 1);
    });

    it('should return 0 if string is "+"', () => {
        assert.equal(calcString('+'), 0);
    });

    it('should return 4 if string is "2 * 2"', () => {
        assert.equal(calcString('2 * 2'), 4);
    });

    it('should return 4.8 if string is "2 * 2.4"', () => {
        assert.equal(calcString('2 * 2.4'), 4.8);
    });

    it('should return 22 if string is "21 + 1"', () => {
        assert.equal(calcString('21 + 1'), 22);
    });

    it('should return -1 if string is "0 - 1"', () => {
        assert.equal(calcString('0 - 1'), -1);
    });

    it('should return -1 if string is "0 - 1 - "', () => {
        assert.equal(calcString('0 - 1 - '), -1);
    });

    it('should return 3 if string is "1 + 1 * 2"', () => {
        assert.equal(calcString('1 + 1 * 2'), 3);
    });

    it('should return 1.5 if string is "1 + 1 / 2"', () => {
        assert.equal(calcString('1 + 1 / 2'), 1.5);
    });

    it('should return 2 if string is "1 + + 1"', () => {
        assert.equal(calcString('1 + + 1'), 2);
    });

    it('should return 2 if string is "1 + * 1"', () => {
        assert.equal(calcString('1 + * 1'), 2);
    });

    it('should return 1.5 if string is "+ * 1 + 1 / 2"', () => {
        assert.equal(calcString('+ * 1 + 1 / 2'), 1.5);
    });

    it('should return 13 if string is "1+3+6+2+1"', () => {
        assert.equal(calcString('1+3+6+2+1'), 13);
    });

    it('should return -7 if string is "1-3-6+2-1"', () => {
        assert.equal(calcString('1-3-6+2-1'), -7);
    });

    it('should return 10 if string is "1+2*2*2+1"', () => {
        assert.equal(calcString('1+2*2*2+1'), 10);
    });

    it('should return -2 if string is "-1*2"', () => {
        assert.equal(calcString('-1*2'), -2);
    });

    it('should return 0 if string is ""', () => {
        assert.equal(calcString(''), 0);
    });

    it('should return 10 if string is "16/8+4*2-/"', () => {
        assert.equal(calcString('16/8+4*2-/'), 10);
    });

    it('should return 6 if string is "3 + 4 + 4 - 5"', () => {
        assert.equal(calcString('3 + 4 + 4 - 5'), 6);
    });
});

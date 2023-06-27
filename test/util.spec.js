const { sumTwoNumber, max } = require('../src/utils/sum');

describe('Test math methods', () => {
    it('Expect sum of two number', () => {
        expect(sumTwoNumber(1, 2)).toEqual(3)
    });
    it('Expect greater number in am array', () => {
        const numbers = [1, 2, 3, 4, 5];
        expect(max(numbers)).toEqual(5)
    })
});


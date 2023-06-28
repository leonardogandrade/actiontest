const { sumTwoNumber, max } = require('../utils/sum');

describe('Test math methods', () => {
    it('Should sum of two number', () => {
        expect(sumTwoNumber(1, 2)).toEqual(3)
    });
    it('Should greater number in am array', () => {
        const numbers = [1, 2, 3, 4, 5];
        expect(max(numbers)).toEqual(5)
    });
    it('Should thrown an error', () => {
        const numbers_ = [1, 2, 3, 4, 'Z'];
        expect(() => {
            max(numbers_)
        }).toThrow(TypeError);
    })
});


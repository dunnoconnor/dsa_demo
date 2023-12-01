const maxProfit = require('./twoPointers');

describe('Return the maximum profit you can achieve in the given span of days', () => {
    test('Test case 1', () => {
        expect(maxProfit([7,1,5,3,6,4])).toBe(7);
    });

    test('Test case 2', () => {
        expect(maxProfit([1,2,3,4,5])).toBe(4);
    });

    test('Test case 3', () => {
        expect(maxProfit([7,6,4,3,1])).toBe(0);
    });
});
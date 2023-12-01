const nestedArraySum = require('./recursion')

test('returns sum of flat array', () => {
    expect(nestedArraySum([1, 2, 3, 4, 5])).toBe(15);
});

test('returns sum of nested arrays', () => {
    expect(nestedArraySum([1, [2], [3, [4, 5]]])).toBe(15);
});

test('ignores non-numeric array elements', () => {
    expect(nestedArraySum([1, 'foo', [2, 'bar']])).toBe(3);
});
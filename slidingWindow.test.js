const countUniqueSubstrings = require("./slidingWindow");

describe('countUniqueSubstrings',()=>{
    test('returns the correct count',()=>{
        expect(countUniqueSubstrings('xyzzaz')).toBe(1)
        expect(countUniqueSubstrings('aababcabc')).toBe(4)
        expect(countUniqueSubstrings('aaabbb')).toBe(0)
        expect(countUniqueSubstrings('abc')).toBe(1)
        expect(countUniqueSubstrings("a")).toBe(0)
        expect(countUniqueSubstrings("")).toBe(0)
    })
})
const permutesToPalindrome = require('./problemSolving')

test('racecar is a palindrome', () => {
    expect(permutesToPalindrome('racecar')).toBe(true)
});

test('abba is a palindrome', () => {
    expect(permutesToPalindrome('abba')).toBe(true)
});

test('abc is not a palindrome', () => {
    expect(permutesToPalindrome('abc')).toBe(false)
});

test('empty string is not a palindrome', () => {
    expect(permutesToPalindrome('')).toBe(false)
});
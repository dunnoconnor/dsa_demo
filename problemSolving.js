//S:
//Write a function that determines if any permutation of a string is a palindrome
//permutation = same characters, same frequency, any sequence
//palindrome = same string forwards and backwards
//empty string should return false
//strings only, letters only

//E:
//racecar -> true
//ttddoopp -> true
//tdooppp -> false
//abba -> true
//abc - false
//"" -> false

//A:
//Find all permutations.  Then reverse each permutation.  Check if permutation==reversed.
//Instead of every permutation, I want to count the characters in the string.
//A palindrom always has an even count of each character, excepting when there is a character in the middle
//A palindrome has 1 or fewer characters with an odd character count
//create a counter object
// for each character in the string, if its in the counter object - increment
// if the character is not in the counter, add it as a new key with value 1
//if there are one or fewer characters with an odd count, it can be a palindrome

```
Count ={
    r:2,
    a:2,
    c:2,
    e:1
}
```

function permutesToPalindrome(string){
    return true;
}

module.exports = permutesToPalindrome;
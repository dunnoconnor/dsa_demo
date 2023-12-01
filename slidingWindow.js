/*
A string is good if there are no repeated characters.
Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
A substring is a contiguous sequence of characters in a string.
*/

function countUniqueSubstrings(str){
    //accumulator varible to count unique substrings
    let count = 0;
    //loop through string
    //for each i, if char at i is unque from the char i+1 and i+2 the substring is unique
    for(let i=0;i<str.length-2;i++){
        let first = str[i];
        let second = str[i+1];
        let third = str[i+2];
        if(first!==second&&first!==third&&second!==third){
            count++;
        }
    }
    return count;
}
module.exports = countUniqueSubstrings;
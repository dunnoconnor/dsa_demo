// question 1: what problem does binary search solve?
// question 2: what are the limitations of binary search?
// queston 3: how would you summarize what a binary search does?

// const array=[2,3,4,10,40,45];

function binarySearch(array,target){
    //make two pointers
    let left = 0;
    let right = array.length-1;
    //while left is before or equal toright
    while(left <= right){
        //identify the midpoint - add both pointers, divide by two, round down
        const mid = Math.floor((left+right)/2);
        //if the midpoint value is the target value, return that index
        if(array[mid]===target){
            return mid;
        }
        //if midpoint value is less than the target value, set the left side of the search window to mid+1
        if(array[mid]<target){
            left = mid+1;
        } else{
        //if midpoint value is more than the target value, set the right side of the search window to mid-1
            right = mid-1;
        }
    }
    return -1;
}

module.exports = binarySearch;
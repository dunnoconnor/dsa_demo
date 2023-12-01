//step : split array
// step 2: recursive sort
// step 3: merge subarrays
// step 4: final merge
let test = [5, 3, 6, 1, 8, 7, 2]

function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    //find the midpoint in this array
    let mid = Math.floor(arr.length/2);
    //split the array in half and recursively sort each half
    let subLeft = mergeSort(arr.slice(0,mid));
    let subRight = mergeSort(arr.slice(mid));
    //to do -> merge subarrays back together
    console.log("left ",subLeft, " right ", subRight)
    return merge(subLeft,subRight);
}

function merge(node1, node2){
    var result = [];
    //while both arrays have remaining elements
    while(node1.length>0 && node2.length>0){
        //add the smaller of the two 0th elements to the result array
        result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
    }
    return result.concat(node1.length ? node1 : node2);
}

console.log(mergeSort(test));
module.exports = mergeSort;
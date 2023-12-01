let arr1 = [-9, 2, 3, -5, 20]; // => 11
let arr2 = [1,2,[3,4,[5]],6]; // => 21

function singleArraySum(arr){
    //accumulator variable starts @ 0
    let total = 0;
    //loop a number of times equal to the array length
    for(i=0;i<arr.length;i++){
        //add the value of the current array index to total
        total += arr[i];
    }
    //return the sum total of array elements
    return total
}

function nestedArraySum(arr){
    //accumulator variable
    let total = 0;
    for(let i=0;i<arr.length;i++){
        //if arr[i] is an array, recursively summ the contents of that array
        if(Array.isArray(arr[i])){
            total += nestedArraySum(arr[i]);
        } else if(typeof arr[i]==='number') {
            total += arr[i];
        }
        //else add the number to total
    }
    return total;
}

let test1 = nestedArraySum(arr1);
console.log(test1)

let test2 = nestedArraySum(arr2);
console.log(test2)

module.exports = nestedArraySum;
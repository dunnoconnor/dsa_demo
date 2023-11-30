//Examples of Big O notation

//constant time O(1)
function getFirst(arr){
    return arr[0];
}

//linear time O(n)
function getSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

//quadratic time example O(n^2)
function getSmaller(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(j<i){
                console.log("j is smaller")
            } else{
                console.log("j is not smaller")
            }
        }
    }
}

// test arrays
test1=[1];
test2=[...Array(100)];
test3=[...Array(1000)]; 

console.time('getSmaller @ length 1');
getSmaller(test1);
console.timeEnd('getSmaller @ length 1');

console.time('getSmaller @ length 1 thousand');
getSmaller(test3);
console.timeEnd('getSmaller @ length 1 thousand');

// console.time('getFirst @ length 1')
// getFirst(test1)
// console.timeEnd('getFirst @ length 1')

// console.time('getFirst @ 10000')
// getFirst(test3)
// console.timeEnd('getFirst @ 10000')
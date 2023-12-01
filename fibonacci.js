//Given the integer n, write a function that returns the nth number in the Fibonacci Sequence
let count =0;
function fibonacci(n){
    //set the base case
    count++
    console.log(n, count)
    if(n<=1){
        return n;
    } else{
        //set the recursive case
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

fibonacci(190)

module.exports = fibonacci;
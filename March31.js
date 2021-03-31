// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array 
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

function divisibleSumPairs(n, k, ar) {
    var counter = 0
    for(var i = 0; i < ar.length; i++){
        for(var j = i+1; j < ar.length; j++){
            if((ar[i] + ar[j])%k === 0){
                counter ++
            }
        }
    }
    return counter
}

console.log(divisibleSumPairs(6,5,[1,2,3,4,5,6])) //3



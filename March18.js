// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .
// Return

// long: the sum of all array elements

function aVeryBigSum(ar) {
    return ar.reduce((acc, curr) => acc + curr)
}

// console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005])) //5000000015


// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example
// candles = [4,4,1,3]

// The maximum height candles are 4 units high. There are 2  of them, so return 2.

// Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

// int candles[n]: the candle heights

function birthdayCakeCandles(candles) {
    let largest = Math.max(...candles)
    let largestCount = candles.filter((current) => current === largest)
    return largestCount.length

}

console.log(birthdayCakeCandles([4,4,1,3])) //return 2 bc there are two 4 inch candles
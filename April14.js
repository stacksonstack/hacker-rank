// Given a number n, for each interger i in the range from 1 to n, print one value per line as follows:
// - if i is a multiple of both 3 and 5, print FizzBuzz.
// - if i is a multiple of only 3, print Fizz.
// - if i is a multiple of only 5, print Buzz.
// - if i is not a multiple of 3 or 5, print the value 

function fizzBuzz(n) {
    var string = ""
    for(let i =1; i <= n; i++){
        if(i%3 === 0 && i% 5===0) string += 'FizzBuzz\n'
        else if(i%3===0) string += 'Fizz\n'
        else if(i%5==0) string += 'Buzz\n'
        else string += `${i}\n`
    }
    return console.log(string)
}

// fizzBuzz(15) 


// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line.
function plusMinus(arr) {
    let d = arr.reduce((acc, curr)=> {
        if (curr > 0) acc['1']+= 1 
        else if (curr < 0) acc['-1'] += 1
        else acc['0'] += 1
        return acc
    },{'1': 0, '-1': 0, '0': 0})
    // arr= [-4, 3, -9, 0, 4, 1]
    // 0.500000
    // 0.333333
    // 0.166667
    return `${(d['1']/arr.length).toFixed(6)}\n${(d['-1']/arr.length).toFixed(6)}\n${(d['0']/arr.length).toFixed(6)}`  
    
}

// console.log(plusMinus([-4,3,-9,0,4,1])) // 0.5 \n 0.33333 \n , 0.166667


// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    let sorted = arr.sort()
    return [sorted.slice(0,arr.length -1).reduce((acc, curr)=> acc + curr), sorted.slice(1).reduce((acc, curr)=> acc + curr)]
}

// console.log(miniMaxSum([1,2,3,4,5]))

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:

function diagonalDifference(arr) {
    let myArray = 0
    let myArray2 = 0
    for(let i = 0; i < arr.length; i++){
        var index = arr.length - 1
        myArray += arr[i][i]
        myArray2 += arr[i][index - i]
    }
    return Math.abs(myArray - myArray2)
}

// console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]))

function _diagonalDifference(arr) {
    var indexLength = arr.length - 1
    var diagonal = arr.reduce((acc, curr, index) => {
        console.log(curr)
        acc[0] += curr[index]
        acc[1] += curr[indexLength-index]
        return acc
    }, [0,0])
    return Math.abs(diagonal.reduce((acc, curr) => acc - curr))
}

console.log(_diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]))